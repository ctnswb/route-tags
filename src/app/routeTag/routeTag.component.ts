import { Component, Input } from '@angular/core';
import { RouteTag } from './routeTag.model';


@Component({
  selector: 'route-tag',
  templateUrl: './routeTag.component.html',
  styleUrls: ['./routeTag.component.css']
})
export class RouteTagComponent {
  @Input() tag: RouteTag;
}