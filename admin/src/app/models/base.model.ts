import * as moment from 'moment';
const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export class BaseModel{
    id: number;
    c_time: String;
    u_time: String;

    toModel(jsonObj) {
        this.id = jsonObj.id;
        this.c_time = moment(jsonObj.c_time).format(DATE_FORMAT);
        this.u_time = moment(jsonObj.u_time).format(DATE_FORMAT);
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
