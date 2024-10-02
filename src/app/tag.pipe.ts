import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showTwoItems',
})
export class TagPipe implements PipeTransform {
  transform(value: any[], limit: number = 2): { items: any[]; extra: number } {
    if (!Array.isArray(value)) {
      return { items: value, extra: 0 };
    }

    const show = value.slice(0, limit);
    const extra = value.length - limit;

    return {
      items: show,
      extra: extra > 0 ? extra : 0,
    };
  }
}
