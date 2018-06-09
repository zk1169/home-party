const _ = require('lodash');
const BaseStatusModel = require('./base-status.model');
const STATUS = require('./status.enum');
const MYSQL_QUERY = require('./mysql-pool');

class BannerModel extends BaseStatusModel{
    static getList(page, size, success, error) {
        // console.log('getList');
        const start = (page - 1) * size;
        const sql = `SELECT *  
            FROM t_banner
            WHERE 1=1 
            ORDER BY id ASC LIMIT ${start} , ${size}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                const modelList = [];
                _.forEach(results, (item) => {
                    const model = new BannerModel();
                    modelList.push(model.toModel(item));
                });
                success(modelList);
            }, err => error(err));
    }

    static getTotalCount(success, error) {
        const sql = `SELECT COUNT(1) as total from t_banner WHERE 1=1`;
        MYSQL_QUERY(sql, null,
            (results) => {
                success(_.get(results, '[0].total', 0));
            }, err => error(err));
    }

    static getListAndTotal(options, success, error) {
        const page = _.toNumber(options.page);
        const size = _.toNumber(options.size);
        BannerModel.getTotalCount(
            (total) => {
              BannerModel.getList(page, size, 
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

    static getById(id, success, error) {
        const sql = `select * from t_banner WHERE 1=1 AND id=${id}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                if (results[0]) {
                    const model = new BannerModel();
                    model.toModel(results[0]);
                    success(model);
                } else {
                    success({});
                }
            }, err => error(err));
    }

    save(success, error) {
        let sql = null;
        if (this.id) {
            super.setUTime();
            sql = `UPDATE t_banner SET 
              name='${this.name}',
              images='${this.images}',
              u_time='${this.u_time}' 
              WHERE id=${this.id}`;
            // console.log(sql);
        } else {
            this.status = STATUS.ENABLE;
            super.initTime();
            sql = `INSERT INTO 
              t_banner(
                name, 
                images,
                u_time, 
                c_time) 
              VALUES (
                '${this.name}', 
                '${this.images}',
                ${this.status}, 
                '${this.u_time}', 
                '${this.c_time}')`;
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
        this.images = jsonObj.images;
        return this;
    }

}

module.exports = BannerModel;