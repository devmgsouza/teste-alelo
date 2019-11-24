import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListsAddModalComponent } from './lists-add-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ListsAddModalService {

  constructor(
    private modalService: NgbModal) {}

  closeResult: boolean;

  open(action: string, idCategory: string, id: string): Promise<boolean>  {

    const modalRef = this.modalService.open(ListsAddModalComponent,  { size: 'lg' });
    modalRef.componentInstance.action = action;
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.idCategory = idCategory;
    modalRef.componentInstance.changeRef.markForCheck();

    return modalRef.result;
  }

}
