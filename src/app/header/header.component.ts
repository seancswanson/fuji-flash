import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  dropdownActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleNavsDropdownMenu(e: Event) {
    console.log(e.target);
    this.dropdownActive = !this.dropdownActive;
  }
}
