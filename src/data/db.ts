import { AddCustomerInput, AddPropertyInput, Customer, Property, Vehicle } from '../schema/schemaTypes.ts';

const data: any = {
    Properties: [
        {
            id: 'p1',
            name: 'Property P1',
            type: 'VILLA'
        },
        {
            id: 'p2',
            name: 'Property P2',
            type: 'STUDIO'
        },
    ],
    Customers: [
        {
            id: 'c0',
            email: 'examplec0@example.com',
            name: 'Exampler Customer V0',
            vehicleId: 'v0',
        },
        {
            id: 'c1',
            email: 'examplec1@example.com',
            name: 'Exampler Customer V1',
            vehicleId: 'v1',
        },
    ],
    Vehicles: [
        {
            id: 'v0',
            bikeType: 'MOUNTAIN',
        },
        {
            id: 'v1',
            licensePlate: 'GRAPHQL',
        },
    ],
};

export const getProperties = (): Property[] => {
    return <Property[]>[...data.Properties];
}

export const getProperty = (propertyId: string): Property => {
    return <Property>data.Properties.find((item: Property) => propertyId === item.id);
}

export const addProperty = (property: AddPropertyInput) => {
    const newProperty: Property = { id: `p${++getProperties().length}`, ...property };
    data.Properties.push(newProperty);
    return newProperty;
}

export const getCustomers = (): Customer[] => {
    return <Customer[]>[...data.Customers];
}

export const getCustomer = (customerId: string): Customer => {
    return <Customer>data.Customers.find((item: Customer) => customerId === item.id);
}

export const addCustomer = (customer: AddCustomerInput) => {
    const newCustomer = { id: `c${getCustomers().length}`, ...customer };
    data.Customers.push(newCustomer);
    return newCustomer;
}

export const getVehicle = (vehicleId: string): Vehicle => {
    return <Vehicle>data.Vehicles.find((item: Vehicle) => vehicleId === item.id);
}