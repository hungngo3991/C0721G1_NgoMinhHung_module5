import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];


  constructor(private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
    }, error => {
      console.log('Error');
    }, () => {


    });

  }

  ngOnInit(): void {
  }


}
