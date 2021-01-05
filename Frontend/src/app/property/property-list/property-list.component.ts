import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { HousingService } from 'src/app/sevices/housing.service';
import{IProperty} from 'src/app/model/iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent = 1;
  properties: Array<IProperty>;

  constructor(private route: ActivatedRoute,private housingService: HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString())
    {
      this.SellRent=2; //Means we are on Rent property URL else we are on base url
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
       
      },
      error => {
        console.log(error);
        console.log('httperror:');
      }
    );
  }
}
