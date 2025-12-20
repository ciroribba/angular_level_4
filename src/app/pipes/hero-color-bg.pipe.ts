import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroColor'
})

export class HeroColorPipe implements PipeTransform {
    transform(value: number): string {
        return ColorMap[value as keyof typeof ColorMap];
    }
}

/*
    Documentation:
    value: number
    <div class="stat-value">{{ value | heroColor }}</div>
    <div class="stat-desc">{{ value }}</div>
*/  