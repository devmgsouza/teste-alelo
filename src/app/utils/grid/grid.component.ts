import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/base-component';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent extends BaseComponent implements OnInit {

  @Input() listOfContent:  any[] = [];
  @Input() titleOfTable: string;


  constructor(
        private router: Router
  ) {
      super(router);
  }



  ngOnInit(): void {
    /*
    this.currentPage = this.numberOfPage + 1;
    //TODO Migrar este método para carregar no inicio do sistema
    let domains = <SystemParameter[]> this.storage.getSessionValueFromKey("domains");
    domains.filter( res => {
     res.domain == Parameters.PAGINATION ? this.numberOfResultsArray.push(res) : null;
    })
    this.numberOfResultsArray.sort((a, b) => {
      if (+a.minValue < +b.minValue) return -1;
      else if (+a.minValue < +b.minValue) return 1;
      else return 0;
    });
    this.maxResult = +this.numberOfResultsArray[0].minValue;
  */
  }
}
