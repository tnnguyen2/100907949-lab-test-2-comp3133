import {Component, OnInit} from '@angular/core';
import {Mission} from "../models/mission";
import {SpacexService} from "../network/spacex.service";

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: Mission[] = [];
  filterYear: string = '';

  constructor(private spacexService: SpacexService) {
  }

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe(data => {
        this.launches = data;
      },
      error => {
        console.error('Error fetching launches:', error);
      }
    );
  }
  filterLaunchesByYear(): void {
    if (this.filterYear.trim() === '') {
      // If no year is entered, reset the list to all launches
      this.ngOnInit();
    } else {
      // Filter launches by the entered year
      this.spacexService.getLaunchesByYear(this.filterYear).subscribe(
        (data: Mission[]) => {
          this.launches = data;
        },
        error => {
          console.error('Error fetching launches by year:', error);
        }
      );
    }
  }
}
