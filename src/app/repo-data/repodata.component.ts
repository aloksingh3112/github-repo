import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, DoCheck } from '@angular/core';


@Component({
  selector:'app-repodata',
  templateUrl:'./repodata.component.html',
  styleUrls:['./repodata.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RepoDataComponent {

  @Input() repolist: any[];
  @Input() contributors: any;
  @Output() contributorData=new EventEmitter<{reponame: string,username: string}>();

  getContributors(reponame,username){

    this.contributorData.emit({reponame, username})

}

}
