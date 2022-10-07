import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  loading$!: Observable<string>
  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loading$ = this.loadingService
      .Loading
      .pipe(map(loadingType => loadingType.valueOf()))
  }
}
