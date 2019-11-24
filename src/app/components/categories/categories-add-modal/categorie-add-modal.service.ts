import { CategoriesAddModalComponent } from './categories-add-modal.component';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class CategorieAddModalService {

  constructor(
    private modalService: NgbModal) {}

  closeResult: boolean;

  open(action: string, id: string): Promise<boolean>  {

    const modalRef = this.modalService.open(CategoriesAddModalComponent,  { size: 'lg' });
    modalRef.componentInstance.action = action;
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.changeRef.markForCheck();

    return modalRef.result;
  }

}
