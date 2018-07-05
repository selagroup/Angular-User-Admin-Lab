import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: any, count: number = 30 ): any {
    const ret = value;

    if (ret && ret.length > count){
      return ret.substring(0, Math.max(count, count - 3)) + '...';
    }

    return ret;
  }

}
