import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^(KH-)(\\d{4})$')]),
    name: new FormControl('', [Validators.required]),
    // tslint:disable-next-line:max-line-length
    birthday: new FormControl('', [Validators.required, Validators.pattern('^(?:19\\d{2}|20\\d{2})[-/.](?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])$')]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{9})|([0-9]{12})$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(0|(\\(84\\)\\+))+([9][0-1][0-9]{7})$')]),
    // tslint:disable-next-line:max-line-length
    email: new FormControl('', [Validators.required, Validators.pattern('^(?:^|\\s)[\\w!#$%&\'*+/=?^`{|}~-](\\.?[\\w!#$%&\'*+/=?^`{|}~-]+)*@\\w+[.-]?\\w*\\.[a-zA-Z]{2,3}\\b$')]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required])
  });

  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCustomerTypes();
  }

  saveCustomer() {
    const customer = this.customerForm.value;
    this.customerService.save(customer).subscribe(() => {
      this.router.navigate(['customer/list']);
    }, error => {
      console.log(error);
    });
  }

  getCustomerTypes() {
    this.customerTypeService.getAll().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }

  get id() {
    return this.customerForm.get('id');
  }

  get name() {
    return this.customerForm.get('name');
  }

  get birthday() {
    return this.customerForm.get('birthday');
  }

  get gender() {
    return this.customerForm.get('gender');
  }

  get idCard() {
    return this.customerForm.get('idCard');
  }

  get phone() {
    return this.customerForm.get('phone');
  }

  get email() {
    return this.customerForm.get('email');
  }

  get address() {
    return this.customerForm.get('address');
  }

  get customerType() {
    return this.customerForm.get('customerType');
  }
}
