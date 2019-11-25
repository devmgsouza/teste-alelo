import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-null-search',
  templateUrl: './null-search.component.html',
  styleUrls: ['./null-search.component.css']
})
export class NullSearchComponent implements OnInit {

  @Input() exibir: boolean;

  exibirTela: boolean;

  ngOnInit() {
    this.exibirTela = this.exibir || false;
  }

}
