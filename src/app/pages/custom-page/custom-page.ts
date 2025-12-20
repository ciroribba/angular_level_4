import { Component, computed, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { heroes } from '../../data/herores.data';
import { HeroColorPipe } from '../../pipes/hero-color-bg.pipe';
import { HeroColorNamePipe } from '../../pipes/hero-color-name.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroColorNamePipe, TitleCasePipe, HeroCreatorPipe, HeroSortByPipe, HeroFilterPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  name = signal<string>('Juan David');
  toggleCaseInitial = signal(true);

  // toggleCase() {
  //   this.toggleCaseInitial.set(!this.toggleCaseInitial());
  // }

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  search=signal<string>('');

  
 }
