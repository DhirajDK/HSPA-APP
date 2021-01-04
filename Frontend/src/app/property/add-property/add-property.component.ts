import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IProperty } from 'src/app/model/iproperty';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  SellRent = "1";

  // Will come from masters
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']

  propertyView: IProperty = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    PType: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    FType: null,
    RTM: null,
    Description: null
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit(Form: NgForm) {
    console.log('congrats');
    console.log(this.addPropertyForm);
  }

  onBack() {
    this.router.navigate(['/']);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}