import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
              @Inject (MAT_DIALOG_DATA) public data: any,
              private categoryService: CategoryService){}

  onNoClick(){
    this.dialogRef.close(3)
  }

  delete(){
    if(this.data){
      this.categoryService.deleteCategorie(this.data.id)
      .subscribe( (data:any)=> {
        this.dialogRef.close(1)
      },(error:any)=>{
        this.dialogRef.close(2);
      })
    }
    else{
      this.dialogRef.close(2)
    }
  }
}
