import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroHonorific'
})
export class HeroHonorificPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    if(args == "M"){
      return "Mr." + value;
    } else if (args == "F"){
      return "Ms." + value;
    }
  }

}


/** transform(value: any, ...args: any[]): any {return null}
 * value => the value that is passed to the pipe and to be transformed
 * ...args:any[] => an array  of (optional) parameters is passed in to the pipe
 */