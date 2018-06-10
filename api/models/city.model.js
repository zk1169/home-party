const _ = require('lodash');
const BaseStatusModel = require('./base-status.model');
const STATUS = require('./status.enum');
const MYSQL_QUERY = require('./mysql-pool');

class CityModel extends BaseStatusModel{
    static getList(page, size, success, error) {
        // console.log('getList');
        const start = (page - 1) * size;
        const sql = `SELECT * 
            FROM t_city WHERE 1=1  
            ORDER BY c_time ASC LIMIT ${start} , ${size}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                // console.log(`getList.result=${JSON.stringify(results)}`);
                const modelList = [];
                _.forEach(results, (item) => {
                    const model = new CityModel();
                    modelList.push(model.toModel(item));
                });
                success(modelList);
            }, err => error(err));
    }

    static getListByStatus(status, success, error) {
        const sql = `SELECT * 
            FROM t_city WHERE 1=1 AND status=${status} 
            ORDER BY c_time ASC`;
        MYSQL_QUERY(sql, null,
            (results) => {
                // console.log(`getList.result=${JSON.stringify(results)}`);
                const modelList = [];
                _.forEach(results, (item) => {
                    const model = new CityModel();
                    modelList.push(model.toModel(item));
                });
                success(modelList);
            }, err => error(err));
    }

    static getTotalCount(success, error) {
        const sql = `SELECT COUNT(1) as total from t_city WHERE 1=1`;
        MYSQL_QUERY(sql, null,
            (results) => {
                success(_.get(results, '[0].total', 0));
            }, err => error(err));
    }

    static getListAndTotal(options, success, error) {
        const page = _.toNumber(options.page);
        const size = _.toNumber(options.size);
        CityModel.getTotalCount(
            (total) => {
              CityModel.getList(page, size, 
                    (dataList) => {
                        success({
                            dataList: dataList,
                            page: page,
                            total: total,
                            size: size
                        });
                    },
                    err => error(err)
                );
            },
            err => error(err)
        );
    }

    static deleteById(id, success, error) {
        const sql = `UPDATE t_city SET status='${STATUS.DISABLE}' WHERE id=${id}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                success(id);
            }, err => error(err));
    }

    static saveStatus(id, status, success, error) {
      const sql = `UPDATE t_city SET status='${status}' WHERE id=${id}`;
      MYSQL_QUERY(sql, null,
          (results) => {
              success(id);
          }, err => error(err));
    }

    save(success, error) {
        let sql = null;
        if (this.id) {
            super.setUTime();
            sql = `UPDATE t_city SET name='${this.name}',status='${this.status}',u_time='${this.u_time}'
                    WHERE id=${this.id}`;
        } else {
            this.status = STATUS.ENABLE;
            super.initTime();
            sql = `INSERT INTO t_city(name, status, u_time, c_time) 
                    VALUES ('${this.name}', ${this.status}, '${this.u_time}', '${this.c_time}')`;
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
        return this;
    }

}

module.exports = CityModel;