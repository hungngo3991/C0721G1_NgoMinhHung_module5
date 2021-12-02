import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  title = 'ColorPicker App';
  color = '#2889e9';
  constructor() {
  }

  ngOnInit(): void {
  }

}
