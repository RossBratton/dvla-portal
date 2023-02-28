import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomValidators } from '../../custom-validators';
import { VehicleDetails } from '../../models/vehicle-details.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private api: ApiService, private snackbar: MatSnackBar) {}

  form: FormGroup | null = null;
  vehicleDetails: VehicleDetails | null = null;

  ngOnInit(): void {
    this.form = new FormGroup({
      'registrationNumber': new FormControl('', [
        Validators.required,
        CustomValidators.noSpaces(),
        CustomValidators.notEmpty()
      ])
    });
  }

  isRegistrationNumberValid(): boolean {
    if (!this.form)
      return false;
    
    return this.form.get('registrationNumber')?.invalid ?? false;
  }

  search(): void {
    if (!this.form)
      return;
    
    const registrationNumber: string = this.form.get('registrationNumber')?.value;

    if (registrationNumber) {
      this.api.getVehicleDetails(registrationNumber).subscribe({
        next: (data) => this.vehicleDetails = new VehicleDetails(data),
        error: (err) => {
          console.log('error', err);
          this.snackbar.open(err.message, "Error");
        }
      });
    }
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.code === "Space")
      event.preventDefault();
  }
}
