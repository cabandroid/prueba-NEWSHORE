import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validationFields: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    const origin = control.get('departureStation')
    const destiny = control.get('arrivalStation')

    return origin?.value !== destiny?.value
        ? null
        : { differentValidation: true }
}

