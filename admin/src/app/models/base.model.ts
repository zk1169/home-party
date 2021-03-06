import * as moment from 'moment';
// import * as moment from 'moment/min/moment.min';
const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export class BaseModel{
    id: number;
    status: number;
    c_time: String;
    u_time: String;

    toModel(jsonObj) {
        if (!jsonObj){
            return;
        }
        this.id = jsonObj.id;
        this.status = jsonObj.status;
        this.c_time = moment(jsonObj.c_time).format(DATE_FORMAT);
        this.u_time = moment(jsonObj.u_time).format(DATE_FORMAT);
    }

    toJson(): any {
        const jsonObj = {
            id: this.id,
            status: this.status
        };
        return jsonObj;
    }

    // initTime() {
    //     this.setUTime();
    //     this.setCTime();
    // }

    // setUTime() {
    //     this.u_time = moment().format(DATE_FORMAT);
    // }

    // setCTime() {
    //     this.c_time = moment().format(DATE_FORMAT);
    // }
}
