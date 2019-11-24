import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseModal } from 'src/app/core/base-modal';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent extends BaseModal implements OnInit {
  title: string;
  content: string;
  yesButton: string;
  noButton: string;

  constructor(
    public changeRef: ChangeDetectorRef,
    public aModal: NgbActiveModal) { super(changeRef, aModal); }

  ngOnInit() {

  }

  yes() {
    this.aModal.close(true);
  }

}
