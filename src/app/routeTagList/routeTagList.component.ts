import { Component } from '@angular/core';
import { RouteTag } from '../routeTag/routeTag.model';
import { DataService } from '../data.service';


@Component({
  selector: 'route-tag-list',
  templateUrl: './routeTagList.component.html',
  styleUrls: ['./routeTagList.component.css'],
  providers: [DataService]
})

export class RouteTagListComponent {

  constructor(private dataService: DataService){}

  printTags: RouteTag[] = this.dataService.getTagsToPrint();

}