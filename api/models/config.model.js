const BaseModel = require('./base.model');
class ConfigModel extends BaseModel{
    getConfig(success, error) {
        const sql = `select * from t_config where field='${this.field}'`;
        super.query(sql, null,
            (results) => {
                //if (results) {
                    this.toModel(results[0]);
                    success(this);
                //}
                // success(results)
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