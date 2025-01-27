import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent implements OnInit {

  constructor(private _meta: Meta) {}

  ngOnInit(): void {
    
    //
    this._meta.addTag({name: 'description', content: "Task Details lab lab lab"})

  }

}
