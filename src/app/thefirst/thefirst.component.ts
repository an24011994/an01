import { FirstServiceService } from './../../../../beautiful-card/src/app/first-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thefirst',
  templateUrl: './thefirst.component.html',
  styleUrls: ['./thefirst.component.css'],
})
export class ThefirstComponent implements OnInit {
  @Input() share;
  constructor(private firstService: FirstServiceService) {}

  ngOnInit(): void {}

  chooseName() {
    this.firstService.firstService();
  }
}
