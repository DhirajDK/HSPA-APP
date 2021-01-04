import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public properyId : number;
  constructor(private routes: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.properyId= this.routes.snapshot.params['id'];
  }
  onBack(){
    this.route.navigate(['/']);
  }

}
