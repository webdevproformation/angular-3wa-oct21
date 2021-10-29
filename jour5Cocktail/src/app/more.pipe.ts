import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'more'
})
export class MorePipe implements PipeTransform {

  transform(paragraphe: string, limit : number = 50): string {
    if(paragraphe.length > limit){
      return `${paragraphe.substr(0, limit) } ...`;
    }
    return paragraphe;
  }
}
