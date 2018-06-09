import { Pipe, PipeTransform } from '@angular/core';
import { StatusType } from '@src/app/models/enum';

@Pipe({ name: 'statusPipe' })
class StatusPipe implements PipeTransform {
  transform(value: StatusType) {
  	let result = "";
  	switch(value){
  		case StatusType.ENABLE:
  			result = "上线";
        break;
      default:
  		case StatusType.DISABLE:
        result = "下线";
        break;
  	}
    return result;
  }
}

const StatusList = [
  {id: StatusType.ENABLE, name: new StatusPipe().transform(StatusType.ENABLE)},
  {id: StatusType.DISABLE, name: new StatusPipe().transform(StatusType.DISABLE)}
];

export {
  StatusPipe,
  StatusList
}
