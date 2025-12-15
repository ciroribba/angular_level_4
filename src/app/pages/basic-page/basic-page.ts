import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'basic-page',
  imports: [],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage { }
