import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {Observable} from 'rxjs';
import {CustomerType} from '../../model/customer-type';
import {CustomerTypeService} from '../../service/customer-type.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {


  customer: Customer;
  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private customerTypeService: CustomerTypeService) {
    const id = String(this.activatedRoute.snapshot.params.id);
    this.customerService.findById(id).subscribe(value => {
      this.customer = value;
    }, error => {
      console.log('Error detail');
    });
  }

  ngOnInit(): void {
    this.getCustomerTypes();
  }

  getCustomerTypes() {
    this.customerTypeService.getAll().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }


}
