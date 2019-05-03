import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { throwError,of } from 'rxjs';

@Injectable()
export class AppService{
  public repoData:any[];

constructor(private http: HttpClient){

}


searchRepo(name){

   return this.http.get(`https://api.github.com/users/${name}/repos`).pipe(

     catchError(
       err=>throwError('no User  Found')
     )
   )
   ;

}

searchContributors(reponame,username){
   return this.http.get(`https://api.github.com/repos/${username}/${reponame}/contributors`).
   pipe(
     catchError(
       err=>throwError('No contributors')
     )
   )
}


getRepo(){
  return of(this.repoData);
}



}
