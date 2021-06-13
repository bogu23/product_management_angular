import {Component, Input, OnInit} from '@angular/core';
import {ManufacturerData} from '../ManufacturerData';

@Component({
  selector: 'app-manufacturer-view',
  templateUrl: './manufacturer-view.component.html',
  styleUrls: ['./manufacturer-view.component.css']
})
export class ManufacturerViewComponent implements OnInit {


  @Input('manufactuer')
  manufacturer: ManufacturerData;

  constructor() { }

  ngOnInit(): void {
  }

}
