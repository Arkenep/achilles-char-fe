import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {FormErrorStateMatcher} from '../../shared/form-error-state-matcher';

@Component({
  selector: 'app-login-dialog',
  templateUrl: 'login-dialog.component.html',
})
export class LoginDialogComponent {

  public matcher = new FormErrorStateMatcher();
  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder) { }

  loginForm = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onNoClick(): void {
    this.dialogRef.close();
  }

}
