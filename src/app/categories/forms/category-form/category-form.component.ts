import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserType } from 'src/enums/user-type.enum';
import { CategoryDto } from 'src/models/categories/category.model';

import { AuthService } from 'src/services/auth/auth.service';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {
  @Input() categoryForm: FormGroup;
  @Output() onCategorySubmit = new EventEmitter<CategoryDto>();
  @Output() onBackToList = new EventEmitter<void>();
  isAdmin = false;

  constructor(
    private authService: AuthService,
    fb: FormBuilder) {
    this.categoryForm = fb.group({
      name: ['', Validators.required],
    });
  }

  categorySubmit(){
    this.onCategorySubmit.emit(this.categoryForm.value);
  }

  backToList(){
    this.onBackToList.emit();
  }

  ngOnInit(): void {
    this.authService.authUser$.subscribe((authUser) => {     
      this.isAdmin = authUser.userType === UserType.Admin;    
    });
  }
}
