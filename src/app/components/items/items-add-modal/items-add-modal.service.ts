import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemsAddModalComponent } from './items-add-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ItemsAddModalService {

  constructor(
    private modalService: NgbModal) {}

  closeResult: boolean;

  open(action: string, idCategory: string, idList: string, id: string): Promise<boolean>  {

    const modalRef = this.modalService.open(ItemsAddModalComponent,  { size: 'lg' });
    modalRef.componentInstance.action = action;
    modalRef.componentInstance.idCategory = idCategory;
    modalRef.componentInstance.idList = idList;
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.changeRef.markForCheck();

    return modalRef.result;
  }

}
