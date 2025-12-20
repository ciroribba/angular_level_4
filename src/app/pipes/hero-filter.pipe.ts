import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroFilter'
})

export class HeroFilterPipe implements PipeTransform {
    transform(value: Hero[], search: string): Hero[] {
        if (!search.trim()) return value;
        return value.filter(hero => hero.name.toLowerCase().includes(search.toLowerCase()));
    }
}

/*
    Documentation:
    value: Hero[]
    search: string
    <div class="stat-value">{{ value | heroFilter:search }}</div>
    <div class="stat-desc">{{ value }}</div>
*/  