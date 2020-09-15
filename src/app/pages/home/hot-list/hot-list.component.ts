import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-hot-list',
  templateUrl: './hot-list.component.html',
  styleUrls: ['./hot-list.component.css']
})
export class HotListComponent implements OnInit {

  constructor(
    public util: UtilService
  ) { }

  ngOnInit(): void {
  }

}
