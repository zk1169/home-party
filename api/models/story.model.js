const _ = require('lodash');
const BaseStatusModel = require('./base-status.model');
const STATUS = require('./status.enum');
const MYSQL_QUERY = require('./mysql-pool');

class StoryModel extends BaseStatusModel{
    static getList(page, size, success, error) {
        // console.log('getList');
        const start = (page - 1) * size;
        const sql = `SELECT * 
            FROM t_story 
            WHERE 1=1 
            ORDER BY id ASC LIMIT ${start} , ${size}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                const modelList = [];
                _.forEach(results, (item) => {
                    const model = new StoryModel();
                    modelList.push(model.toModel(item));
                });
                success(modelList);
            }, err => error(err));
    }

    static getListByStatus(status, success, error) {
        const sql = `SELECT * 
            FROM t_story 
            WHERE 1=1 AND status=${status}
            ORDER BY id ASC`;
        MYSQL_QUERY(sql, null,
            (results) => {
                const modelList = [];
                _.forEach(results, (item) => {
                    const model = new StoryModel();
                    modelList.push(model.toModel(item));
                });
                success(modelList);
            }, err => error(err));
    }

    static getTotalCount(success, error) {
        const sql = `SELECT COUNT(1) as total from t_story WHERE 1=1`;
        MYSQL_QUERY(sql, null,
            (results) => {
                success(_.get(results, '[0].total', 0));
            }, err => error(err));
    }

    static getListAndTotal(options, success, error) {
        const page = _.toNumber(options.page);
        const size = _.toNumber(options.size);
        StoryModel.getTotalCount(
            (total) => {
              StoryModel.getList(page, size, 
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
        const sql = `select * from t_story WHERE 1=1 AND id=${id}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                if (results[0]) {
                    const model = new StoryModel();
                    model.toModel(results[0]);
                    success(model);
                } else {
                    success({});
                }
            }, err => error(err));
    }

    static deleteById(id, success, error) {
        const sql = `UPDATE t_story SET status='${STATUS.DISABLE}' WHERE id=${id}`;
        MYSQL_QUERY(sql, null,
            (results) => {
                success(id);
            }, err => error(err));
    }

    static saveStatus(id, status, success, error) {
      const sql = `UPDATE t_story SET status='${status}' WHERE id=${id}`;
      MYSQL_QUERY(sql, null,
          (results) => {
              success(id);
          }, err => error(err));
    }

    save(success, error) {
        let sql = null;
        if (this.id) {
            super.setUTime();
            sql = `UPDATE t_story SET 
              type=${this.type} 
              name='${this.name}',
              headerImg='${this.headerImg}',
              cover='${this.cover}',
              coverBig='${this.coverBig}',
              label='${this.label}',
              title='${this.title}',
              content='${this.content}',
              paragraph='${this.paragraph}',
              status='${this.status}',
              u_time='${this.u_time}' 
              WHERE id=${this.id}`;
            // console.log(sql);
        } else {
            this.status = STATUS.ENABLE;
            super.initTime();
            sql = `INSERT INTO 
              t_story(
                type,
                name, 
                headerImg, 
                cover, 
                coverBig, 
                label, 
                title, 
                content, 
                paragraph,
                status,
                u_time, 
                c_time) 
              VALUES (
                '${this.type}', 
                '${this.name}', 
                '${this.headerImg}', 
                '${this.cover}', 
                '${this.coverBig}',
                '${this.label}',
                '${this.title}',
                '${this.content}',
                '${this.paragraph}',
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
        this.type = jsonObj.type;
        this.name = jsonObj.name;
        this.headerImg = jsonObj.headerImg;
        this.cover = jsonObj.cover;
        this.coverBig = jsonObj.coverBig;
        this.label = jsonObj.label;
        this.title = jsonObj.title;
        this.content = jsonObj.content;
        this.paragraph = jsonObj.paragraph;
        return this;
    }

}

module.exports = StoryModel;