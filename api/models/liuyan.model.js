const _ = require('lodash');
const BaseStatusModel = require('./base-status.model');
const STATUS = require('./status.enum');
const MYSQL_QUERY = require('./mysql-pool');

class LiuyanModel extends BaseStatusModel{
    static getList(success, error) {
        const sql = `select * from t_liuyan WHERE status=${STATUS.ENABLE}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                const modelList = [];
                _.forEach(results, (item) => {
                    const model = new LiuyanModel();
                    modelList.push(model.toModel(item));
                });
                success(modelList);
            }, err => error(err));
    }

    static getById(id, success, error) {
        const sql = `select * from t_liuyan WHERE status=${STATUS.ENABLE} AND id=${id}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                if (results[0]) {
                    const model = new LiuyanModel();
                    model.toModel(results[0]);
                    success(model);
                } else {
                    success({});
                }
            }, err => error(err));
    }

    static deleteById(id, success, error) {
        // const sql = `DELETE FROM t_liuyan WHERE id=${id}`;
        const sql = `UPDATE t_liuyan SET status='${STATUS.DISABLE}' WHERE id=${id}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                success(id);
            }, err => error(err));
    }

    save(success, error) {
        let sql = null;
        if (this.id) {
            super.setUTime();
            sql = `UPDATE t_liuyan SET name='${this.name}',phone='${this.phone}',city='${this.city}',message='${this.message}',status='${this.status}',u_time='${this.u_time}'
                    WHERE id=${this.id}`;
        } else {
            this.status = STATUS.ENABLE;
            super.initTime();
            sql = `INSERT INTO t_liuyan(name, phone, city, message, status, u_time, c_time) 
                    VALUES ('${this.name}', '${this.phone}', '${this.city}', '${this.message}', ${this.status}, '${this.u_time}', '${this.c_time}')`;
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
        this.name = jsonObj.name;
        this.phone = jsonObj.phone;
        this.city = jsonObj.city;
        this.message = jsonObj.message;
        return this;
    }

}

module.exports = LiuyanModel;