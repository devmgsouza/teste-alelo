import { OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

export class BaseComponent {

        constructor(
            private baseRouter: Router,
        ) {}
}
