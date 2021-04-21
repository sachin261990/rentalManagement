import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RenterServiceService {
  sharingData:{};

  constructor(private httpClient: HttpClient) {
   }

   getCatalogData():Observable<any[]>{
    return this.httpClient.get("assets/catalog.json").pipe(map(data => data['data']['locations']));
   }


   getdataById(id: string):Observable<any[]>{
    return this.httpClient.get("assets/catalog.json").pipe(map(data => {
      return data['data']['locations'].find((item =>{
        return item.dealers_id === id
      }))
    }));
};

set(data) {
  this.sharingData = {};
  if (data) {
    this.sharingData = data;
  }
}

get() {
  // console.log('this.sharingData'+ JSON.stringify(this.sharingData));
  return this.sharingData;
}

}

