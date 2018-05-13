const BaseModel = require('./base.model');
class BaseStatusModel extends BaseModel{
    toModel(jsonObj) {
        super.toModel(jsonObj);
        this.status = jsonObj.status;
    }
}

module.exports = BaseStatusModel;