import { Component } from '@angular/core';
import { RouteTag } from '../routeTag/routeTag.model';

@Component({
  selector: 'route-tag-list',
  templateUrl: './routeTagList.component.html',
  styleUrls: ['./routeTagList.component.css']
})

export class RouteTagListComponent {
  routeTags: RouteTag[] = [
    new RouteTag('boulder', 'blue', 'I am sleepy', '4', '2/12/18', 'CL', null, null, null),
    new RouteTag('rope', 'purple', 'Need to take a nap', '11c', '2/12/18', 'CL', 'TR and Lead', 58, null)
  ];

  printTags: RouteTag[] = [
    new RouteTag('boulder', 'blue', 'I am sleepy', '4', '2/12/18', 'DG', null, null, null),
    new RouteTag('rope', 'purple', 'Need to take a nap', '11c', '2/12/18', 'KS', 'Top Rope #58 and Lead', 58, null),
    new RouteTag('rope', 'red', 'I see this as red not orange', '10d', '2/12/18', 'CC', 'Top Rope #2 Only', 2, 'Crack on'),
    new RouteTag('boulder', 'black', 'I dont boulder', '2', '2/12/18', 'ML', null, null, null),
    new RouteTag('rope', 'pink', 'What colors am I missing', '8', '2/12/18', 'CUZ', 'Lead Only', null, null)
  ]
}