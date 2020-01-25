import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
colors;
  constructor(private data1: DataService) { }

  ngOnInit() {
    this.data1.getColors().subscribe(c => {
      this.colors= c;
  })

}
}