import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base-component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent extends BaseComponent {



  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {super(router); }


}
