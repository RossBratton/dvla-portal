import {DateTime } from 'luxon';

enum FuelTypes {
    UNKNOWN,
    PETROL,
    DIESEL
}

export class VehicleDetails {
    artEndDate: DateTime = DateTime.now();
    co2Emissions: number = 0;
    colour: string = 'UNKNOWN';
    engineCapacity: number = 0;
    fuelType: FuelTypes = FuelTypes.UNKNOWN;
    make: string =  'UNKNOWN';
    markedForExport: boolean = false;
    monthOfFirstRegistration: DateTime = DateTime.now();
    motStatus: string =  'UNKNOWN';
    registrationNumber: string =  'UNKNOWN';
    revenueWeight: number = 0;
    taxDueDate: DateTime = DateTime.now();
    taxStatus: string =  'UNKNOWN';
    typeApproval: string =  'UNKNOWN';
    wheelplan: string =  'UNKNOWN';
    yearOfManufacture: number = 0;
    euroStatus: string =  'UNKNOWN';
    realDrivingEmissions: string =  'UNKNOWN';
    dateOfLastV5CIssued: DateTime = DateTime.now();

    constructor(data?: VehicleDetails) {
        if (!data)
            return;

        this.artEndDate = data.artEndDate;
        this.co2Emissions = data.co2Emissions;
        this.colour = data.colour;
        this.engineCapacity = data.engineCapacity;
        this.euroStatus = data.euroStatus;
        this.fuelType = data.fuelType;
        this.make = data.make;
        this.markedForExport = data.markedForExport;
        this.monthOfFirstRegistration = data.monthOfFirstRegistration;
        this.motStatus = data.motStatus;
        this.registrationNumber = data.registrationNumber;
        this.revenueWeight = data.revenueWeight;
        this.taxDueDate = data.taxDueDate;
        this.taxStatus = data.taxStatus;
        this.typeApproval = data.typeApproval;
        this.wheelplan = data.wheelplan;
        this.yearOfManufacture = data.yearOfManufacture;
        this.euroStatus = data.euroStatus;
        this.realDrivingEmissions = data.realDrivingEmissions;
        this.dateOfLastV5CIssued = data.dateOfLastV5CIssued;
    }
}