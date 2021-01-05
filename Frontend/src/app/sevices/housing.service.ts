import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProperty } from 'src/app/model/iproperty';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];
        const newProperties = JSON.parse(localStorage.getItem('newPorp'));
        if (newProperties) {
          for (const id in newProperties) {
            if (newProperties.hasOwnProperty(id) && newProperties[id].SellRent === SellRent) {
              propertiesArray.push(newProperties[id]);
            }
          }
        }

        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    )
  }
  // Add new property
  addProperty(property: Property) {
    let newProp = [property];

    // Add new property in array if newProp already exists in local storage
    if (localStorage.getItem('newProp')) {
      newProp = [property,
        ...JSON.parse(localStorage.getItem('newProp'))];
    }
    localStorage.setItem('newProp', JSON.stringify(newProp))
  }
  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      return +localStorage.getItem('PID');
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
