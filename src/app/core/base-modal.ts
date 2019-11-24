import { ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

export class BaseModal  {

    public readOnly = false;

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private activeModal: NgbActiveModal) {
    }



    no() {
        this.activeModal.close(false);
    }

    save(value: any) {
        this.activeModal.close(value);
    }


}
