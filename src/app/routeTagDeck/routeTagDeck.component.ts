import { Component, Input } from '@angular/core';
import { RouteTag } from '../routeTag/routeTag.model';


@Component({
  selector: 'route-tag-deck',
  templateUrl: './routeTagDeck.component.html',
  styleUrls: ['./routeTagDeck.component.css'],
})

export class RouteTagDeckComponent {
  @Input() printTags: RouteTag[];
}