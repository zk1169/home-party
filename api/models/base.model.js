var mysql_query = require('./mysql-pool');
class BaseModel{
    query(sql, options, success, error) {
        return mysql_query(sql, options, results => success(results), err => error(err));
    }

    toModel(jsonObj) {
        this.id = jsonObj.id;
        this.c_time = jsonObj.c_time;
        this.u_time = jsonObj.u_time;
        // this.c_time = new Date(jsonObj.c_time).toString('yyyy-MM-dd HH:mm:ss');
        // this.u_time = new Date(jsonObj.u_time).toString('yyyy-MM-dd HH:mm:ss');
    }
}

module.exports = BaseModel;