import { AppService } from './../app.service';
import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';



@Component({
  selector:' app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls:['./repolist.component.scss']
})
export class RepoListComponent implements DoCheck{
  repoList: any[] = [];
  contributorsList: any[]= [];
  constructor(private appService: AppService){}
  ngDoCheck(): void {

    console.log(this.appService.getRepo().subscribe(
      (data: any[])=>{
       if(data){
         if(data.length>0){
           data.sort((a,b)=>{
            return (b.stargazers_count - a.stargazers_count)
           });
           this.repoList = [...data];

         }

       }
      },
      err=>{}
    ))

  }

  getContributors(data){
   this.appService.searchContributors(data.reponame,data.username)
    .subscribe(
      (repodata: any[]) =>{
        
        this.contributorsList= [...repodata]
      },
      err=>{}
    )
  }

}
