import { FirstServiceService } from './../../../../beautiful-card/src/app/first-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thesecond',
  templateUrl: './thesecond.component.html',
  styleUrls: ['./thesecond.component.css'],
})
export class ThesecondComponent implements OnInit {
  chose;

  constructor(private firstService: FirstServiceService) {}

  ngOnInit(): void {}
}
