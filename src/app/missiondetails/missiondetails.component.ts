import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpacexService} from "../network/spacex.service";
import {Mission} from "../models/mission";
import {Router} from "@angular/router";

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  launch: Mission | undefined;

  constructor(
    private spacexService: SpacexService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const flightNumber = params.get('flight_number');
      if (flightNumber) {
        this.spacexService.getLaunchDetails(flightNumber).subscribe(response => {
          this.launch = response;
          console.log(response);
        });
      }
    });
  }
  goBack(): void {
    this.router.navigate(['/'], { relativeTo: this.activatedRoute });
  }
}
