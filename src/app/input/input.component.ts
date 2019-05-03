import { AppService } from './../app.service';
import { Component } from '@angular/core';


@Component({
  selector:'app-input',
  templateUrl:'./input.component.html',
  styleUrls:['./input.component.scss']
})
export class InputComponent{

  constructor(private appService: AppService) {

  }

  getData(data: HTMLInputElement) {
    this.appService.searchRepo(data.value)
     .subscribe(

       (list:[])=>this.appService.repoData=[...list],
       err =>this.appService.errorMessage=err
     )
  }



}
