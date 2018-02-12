export class RouteTag {
  public type: string; // boulder or rope
  public color: string;
  public routeName: string;
  public grade: string;
  public setDate: string;
  public setter: string;

  //rope only
  public routeInfo: string; // tr or lead
  public topRopeNumber: number;

  //optional
  public routeNotes: string; //arete crack

  constructor(type: string, color: string, routeName:string, grade: string, setDate:string, setter:string, routeInfo: string, topRopeNumber: number, routeNotes:string) {
    this.type = type;
    this.color = color;
    this.routeName = routeName;
    this.grade = grade;
    this.setDate = setDate;
    this.setter = setter;

    this.routeInfo = routeInfo;
    this.topRopeNumber = topRopeNumber;
    this.routeNotes = routeNotes;
  }
}