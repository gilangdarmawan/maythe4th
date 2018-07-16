import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private userData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProfile().subscribe(data => {
      this.userData = data;
    });
  }

}
