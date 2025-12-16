import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {

  nameLower = signal('ciro');
  nameUpper = signal('CIRO');
  fullName = signal('CiRo DaNiEL');
}
