import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroSortBy'
})

export class HeroSortByPipe implements PipeTransform {
    transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {
        return value.sort((a, b) => {
            if (sortBy) {
                return a[sortBy] < b[sortBy] ? -1 : 1;
            }
            return 0;
        });
    }
}

/*
    Documentation:
    value: Hero[]
    <div class="stat-value">{{ value | heroSortBy }}</div>
    <div class="stat-desc">{{ value }}</div>
*/  