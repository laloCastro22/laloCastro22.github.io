import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
