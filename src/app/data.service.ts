import { RouteTag } from './routeTag/routeTag.model';


export class DataService {
   printTags: RouteTag[] = [
    new RouteTag('boulder', 'blue', 'Test Test', '4', null, '2/12/18', 'DG', null, null, null),
    new RouteTag('rope', 'purple', 'Need to take a nap', '11', 'c', '2/12/18', 'KS', 'Top Rope #58 and Lead', 58, null),
    new RouteTag('rope', 'red', 'I see this as red not orange', '10', 'd', '2/12/18', 'CC', 'Top Rope #2 Only', 2, 'Crack on'),
    new RouteTag('boulder', 'black', 'I dont boulder', '2', null, '2/12/18', 'ML', null, null, null),
    new RouteTag('rope', 'pink', 'What colors am I missing', '8', null, '2/12/18', 'CUZ', 'Lead Only', null, null)
    ]
  getTagsToPrint() {
    return this.printTags;
  }

}
