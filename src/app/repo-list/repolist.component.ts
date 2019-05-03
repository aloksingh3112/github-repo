import { AppService } from './../app.service';
import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';



@Component({
  selector:' app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls:['./repolist.component.scss']
})
export class RepoListComponent implements DoCheck{
  repoList: any[] = [];
  constructor(private appService: AppService){}
  ngDoCheck(): void {

    console.log(this.appService.getRepo().subscribe(
      (data: any[])=>{
       if(data){
         if(data.length>0){
        this.repoList = [...data];
         }
         else{
           this.appService.errorMessage= 'No Repo Found'
         }

       }
      },
      err=>console.log(err)
    ))

  }

}
