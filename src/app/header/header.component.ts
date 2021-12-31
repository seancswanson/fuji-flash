import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuDropdownActive: boolean = false;
  dropdownActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleNavsDropdownItems(e: Event) {
    console.log(e.target);
    this.dropdownActive = !this.dropdownActive;
  }

  public toggleMenuDropdown(e: Event) {
    console.log(e.target);
    this.menuDropdownActive = !this.menuDropdownActive;
  }
}
