import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';


@Component({
  selector: 'basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {

  nameLower = signal('ciro');
  nameUpper = signal('CIRO');
  fullName = signal('CiRo DaNiEL');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
     this.customDate.set(new Date());
     console.log('tick')
    }, 1000);
    
    onCleanup(() => clearInterval(interval));
  });
}
