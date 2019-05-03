import { Component, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector:'app-repodata',
  templateUrl:'./repodata.component.html',
  styleUrls:['./repodata.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RepoDataComponent{

  @Input() repolist: any[];

}
