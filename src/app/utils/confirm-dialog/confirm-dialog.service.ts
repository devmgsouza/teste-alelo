import { ConfirmDialogComponent } from './confirm-dialog.component';
import { Injectable } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(
    private modalService: NgbModal) {}

  closeResult: boolean;

  open(title: string, content: string, yesButton: string, noButton: string): Promise<boolean>  {

    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.content = content;
    modalRef.componentInstance.yesButton = yesButton;
    modalRef.componentInstance.noButton = noButton;
    modalRef.componentInstance.changeRef.markForCheck();

    return modalRef.result;
  }


  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}