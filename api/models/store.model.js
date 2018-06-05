const _ = require('lodash');
const BaseStatusModel = require('./base-status.model');
const STATUS = require('./status.enum');
const MYSQL_QUERY = require('./mysql-pool');

class StoreModel extends BaseStatusModel{
    static getList(page, size, success, error) {
        // console.log('getList');
        const start = (page - 1) * size;
        const sql = `SELECT ts.*, tc.name as cityName 
            FROM t_store as ts 
            LEFT JOIN t_city as tc ON tc.id=ts.cityId
            WHERE 1=1 
            ORDER BY ts.id ASC LIMIT ${start} , ${size}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                const modelList = [];
                _.forEach(results, (item) => {
                    const model = new StoreModel();
                    modelList.push(model.toModel(item));
                });
                success(modelList);
            }, err => error(err));
    }

    static getTotalCount(success, error) {
        const sql = `SELECT COUNT(1) as total from t_store WHERE 1=1`;
        MYSQL_QUERY(sql, null,
            (results) => {
                success(_.get(results, '[0].total', 0));
            }, err => error(err));
    }

    static getListAndTotal(options, success, error) {
        const page = _.toNumber(options.page);
        const size = _.toNumber(options.size);
        StoreModel.getTotalCount(
            (total) => {
              StoreModel.getList(page, size, 
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
        const sql = `select * from t_store WHERE 1=1 AND id=${id}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                if (results[0]) {
                    const model = new StoreModel();
                    model.toModel(results[0]);
                    success(model);
                } else {
                    success({});
                }
            }, err => error(err));
    }

    static deleteById(id, success, error) {
        const sql = `UPDATE t_store SET status='${STATUS.DISABLE}' WHERE id=${id}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                success(id);
            }, err => error(err));
    }

    static saveStatus(id, status, success, error) {
      const sql = `UPDATE t_store SET status='${status}' WHERE id=${id}`;
      MYSQL_QUERY(sql, null,
          (results) => {
              success(id);
          }, err => error(err));
    }

    save(success, error) {
        let sql = null;
        if (this.id) {
            super.setUTime();
            sql = `UPDATE t_store SET 
              cityId='${this.cityId}',
              name='${this.name}',
              address='${this.address}',
              price='${this.price}',
              cover='${this.cover}',
              coverBig='${this.coverBig}',
              playItems='${this.playItems}',
              priceWorkday='${this.priceWorkday}',
              priceWeekend='${this.priceWeekend}',
              allPrice='${this.allPrice}',
              orderNumber='${this.orderNumber}',
              openTime='${this.openTime}',
              section1='${this.section1}',
              section2='${this.section2}',
              section3='${this.section3}',
              section4='${this.section4}',
              section5='${this.section5}',
              status='${this.status}',
              u_time='${this.u_time}' 
              WHERE id=${this.id}`;
            // console.log(sql);
        } else {
            this.status = STATUS.ENABLE;
            super.initTime();
            sql = `INSERT INTO 
              t_store(
                cityId, 
                name, 
                address, 
                price, 
                cover, 
                coverBig, 
                playItems, 
                priceWorkday, 
                priceWeekend,
                allPrice,
                orderNumber,
                openTime,
                section1,
                section2,
                section3,
                section4,
                section5,
                status,
                u_time, 
                c_time) 
              VALUES (
                ${this.cityId},
                '${this.name}', 
                '${this.address}', 
                '${this.price}', 
                '${this.cover}', 
                '${this.coverBig}',
                '${this.playItems}',
                '${this.priceWorkday}',
                '${this.priceWeekend}',
                '${this.allPrice}',
                '${this.orderNumber}',
                '${this.openTime}',
                '${this.section1}',
                '${this.section2}',
                '${this.section3}',
                '${this.section4}',
                '${this.section5}',
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
        this.cityId = jsonObj.cityId;
        this.cityName = jsonObj.cityName;
        this.name = jsonObj.name;
        this.address = jsonObj.address;
        this.price = jsonObj.price;
        this.cover = jsonObj.cover;
        this.coverBig = jsonObj.coverBig;
        this.playItems = jsonObj.playItems;
        this.priceWorkday = jsonObj.priceWorkday;
        this.priceWeekend = jsonObj.priceWeekend;
        this.allPrice = jsonObj.allPrice;
        this.orderNumber = jsonObj.orderNumber;
        this.openTime = jsonObj.openTime;
        this.section1 = jsonObj.section1;
        this.section2 = jsonObj.section2;
        this.section3 = jsonObj.section3;
        this.section4 = jsonObj.section4;
        this.section5 = jsonObj.section5;
        return this;
    }

}

module.exports = StoreModel;