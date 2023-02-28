import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static noSpaces(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const areThereSpaces = control.value?.includes(' ') ?? false;
            const res = areThereSpaces ? {noSpaces: {value: control.value}} : null;
            return res;
        };
    }

    static notEmpty(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const isEmpty = control.value === '';
            const res = (isEmpty) ? {notEmpty: {value: control.value}} : null;
            return res;
        };
    }
}