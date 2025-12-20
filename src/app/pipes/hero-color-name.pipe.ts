import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroColorName'
})

export class HeroColorNamePipe implements PipeTransform {
    transform(value: Color): string {
        return Color[value];
    }
}

/*
    Documentation:
    value: Color
    <div class="stat-value">{{ value | heroColorName }}</div>
    <div class="stat-desc">{{ value }}</div>
*/  