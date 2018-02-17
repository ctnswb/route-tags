import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'create-tag',
  templateUrl: './createTag.component.html',
  styleUrls: ['./createTag.component.css']
})

export class CreateTagComponent implements OnInit {
  createTagForm: FormGroup;

  ngOnInit() {
    this.createTagForm = new FormGroup({
      'routeName': new FormControl(null),
      'date': new FormControl(null),
      'setter': new FormControl(null),
      'color': new FormControl(null),
      'type': new FormControl(null),
      'grade': new FormControl(null),
      'routeInfo': new FormControl(null),
      'routeNotes': new FormControl(null)
    });
  }
}