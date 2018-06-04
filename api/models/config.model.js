const _ = require('lodash');
const BaseModel = require('./base.model');
const STATUS = require('./status.enum');
const MYSQL_QUERY = require('./mysql-pool');

class ConfigModel extends BaseModel{
    getByField(success, error) {
        const sql = `select * from t_config where field='${this.field}'`;
        MYSQL_QUERY(sql, null,
            (results) => {
                //if (results) {
                    this.toModel(results[0]);
                    success(this);
                //}
                // success(results)
            }, err => error(err));
    }

    static getByType(type, success, error) {
        const sql = `select * from t_config where type=${type} AND status='${STATUS.ENABLE}'`;
        MYSQL_QUERY(sql, null,
            (results) => {
                const model = {};
                _.forEach(results, (item) => {
                    model[item.field] = item.value;
                });
                success(model);
            }, err => error(err));
    }

    static update(config, success, error) {
        const sqlArray = [];
        _.forIn(config, (value, key) => {
            sqlArray.push(`UPDATE t_config SET value='${value}' WHERE field='${key}'`);
        });
        const sql = sqlArray.join(';');
        MYSQL_QUERY(sql, null,
            (results) => {
                success(true);
            }, err => error(err));
    }

    toModel(jsonObj) {
        super.toModel(jsonObj);
        this.field = jsonObj.field;
        this.value = jsonObj.value;
        return this;
    }
}

module.exports = ConfigModel;