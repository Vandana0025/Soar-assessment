import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-settings',
  imports: [MatTabsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  constructor() {}

  ngOnInit() {}
}
