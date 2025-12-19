import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  name = signal<string>('Juan David');
  toggleCaseInitial = signal(true);

  // toggleCase() {
  //   this.toggleCaseInitial.set(!this.toggleCaseInitial());
  // }
 }
