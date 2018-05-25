const _ = require('lodash');
const BaseStatusModel = require('./base-status.model');
const STATUS = require('./status.enum');
const MYSQL_QUERY = require('./mysql-pool');

class WechatModel extends BaseStatusModel{
    static getList(success, error) {
        const sql = `select * from t_wechat WHERE status=${STATUS.ENABLE}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                const modelList = [];
                _.forEach(results, (item) => {
                    const model = new WechatModel();
                    modelList.push(model.toModel(item));
                });
                success(modelList);
            }, err => error(err));
    }

    static getById(id, success, error) {
        const sql = `select * from t_wechat WHERE status=${STATUS.ENABLE} AND id=${id}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                if (results[0]) {
                    const model = new WechatModel();
                    model.toModel(results[0]);
                    success(model);
                } else {
                    success({});
                }
            }, err => error(err));
    }

    static checkEmail(openid, success, error) {
      console.log(`checkEmail,openid=${openid}`);
      const sql = `select * from t_wechat WHERE openid='${openid}'`;
      MYSQL_QUERY(sql, null,
          (results) => {
              console.log(JSON.stringify(results));
              if (results[0]) {
                  const model = new WechatModel();
                  model.toModel(results[0]);
                  success(model);
              } else {
                  success(null);
              }
          }, err => error(err));
    }

    save(success, error) {
        let sql = null;
        if (this.id) {
            super.setUTime();
            sql = `UPDATE t_wechat SET openid='${this.openid}',email='${this.email}',status='${this.status}',u_time='${this.u_time}'
                    WHERE id=${this.id}`;
        } else {
            this.status = STATUS.ENABLE;
            super.initTime();
            sql = `INSERT INTO t_wechat(openid, email, status, u_time, c_time) 
                    VALUES ('${this.openid}', '${this.email}', ${this.status}, '${this.u_time}', '${this.c_time}')`;
        }
        MYSQL_QUERY(sql, null,
            (result) => {
                if (result.insertId) {
                    this.id = result.insertId;
                }
                success(this);
            }, err => error(err));
    }

    toModel(jsonObj) {
        super.toModel(jsonObj);
        this.openid = jsonObj.openid;
        this.email = jsonObj.email;
        return this;
    }
}

module.exports = WechatModel;