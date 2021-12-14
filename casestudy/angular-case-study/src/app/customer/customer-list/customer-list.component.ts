import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  private closeResult: string;

  constructor(private customerService: CustomerService,
              private modalService: NgbModal) {
  }

  p = 1;
  term: any;

  customerList: Customer[] = [];

  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(customerList => {
      this.customerList = customerList;
      console.log(customerList);
    });
  }

  // delete Modal

  open(content, videoId) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result === 'yes') {
        this.deleteHero(videoId);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${CustomerListComponent.getDismissReason(reason)}`;
    });
  }

  deleteHero(id) {
    this.customerService.delete(id).subscribe(next => {
      this.customerList = this.customerList.filter(x => x.id !== id);
    });
  }

}
