import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    supplierDetails: any;

    setSupplierDetails(supplierDetails: any) {
        this.supplierDetails = supplierDetails;
    }

    getSupplierDetails() {
        return this.supplierDetails;
    }


}