import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private service : userService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.logout();
  }

}
