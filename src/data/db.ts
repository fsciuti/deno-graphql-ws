import {
  AddBookingInput,
  AddCustomerInput,
  AddPropertyInput,
  Booking,
  Customer,
  Property,
  Vehicle,
} from "../schema/types/schemaTypes.ts";

const data: any = {
  Booking: [
    {
      id: "b0",
      propertyId: "p0",
      customerId: "c0",
      startTime: "2019-05-04",
      endTime: "2019-06-03",
    },
    {
      id: "b1",
      propertyId: "p0",
      customerId: "c0",
      startTime: "2019-06-04",
      endTime: "2019-07-03",
    },
    {
      id: "b2",
      propertyId: "p1",
      customerId: "c0",
      startTime: "2019-10-04",
      endTime: "2019-10-03",
    },
    {
      id: "b3",
      propertyId: "p1",
      customerId: "c0",
      startTime: "2019-10-04",
      endTime: "2019-10-03",
    },
    {
      id: "b4",
      propertyId: "p0",
      customerId: "c0",
      startTime: "2019-10-04",
      endTime: "2019-10-03",
    },
  ],
  Properties: [
    {
      id: "p1",
      name: "Property P1",
      type: "VILLA",
    },
    {
      id: "p2",
      name: "Property P2",
      type: "STUDIO",
    },
  ],
  Customers: [
    {
      id: "c0",
      email: "examplec0@example.com",
      name: "Exampler Customer V0",
      vehicleId: "v0",
    },
    {
      id: "c1",
      email: "examplec1@example.com",
      name: "Exampler Customer V1",
      vehicleId: "v1",
    },
  ],
  Vehicles: [
    {
      id: "v0",
      bikeType: "MOUNTAIN",
    },
    {
      id: "v1",
      licensePlate: "GRAPHQL",
    },
  ],
};

export const getProperties = (): Property[] => {
  return <Property[]> [...data.Properties];
};

export const getProperty = (propertyId: string): Property => {
  return <Property> data.Properties.find((item: Property) =>
    propertyId === item.id
  );
};

export const addProperty = (property: AddPropertyInput) => {
  const newProperty: Property = {
    id: `p${++getProperties().length}`,
    ...property,
  };
  data.Properties.push(newProperty);
  return newProperty;
};

export const getCustomers = (): Customer[] => {
  return <Customer[]> [...data.Customers];
};

export const getCustomer = (customerId: string): Customer => {
  return <Customer> data.Customers.find((item: Customer) =>
    customerId === item.id
  );
};

export const addCustomer = (customer: AddCustomerInput) => {
  const newCustomer: any = { id: `c${getCustomers().length}`, ...customer };
  newCustomer.vehicleId = "v1";
  data.Customers.push(newCustomer);
  return newCustomer;
};

export const getVehicle = (vehicleId: string): Vehicle => {
  return <Vehicle> data.Vehicles.find((item: Vehicle) => vehicleId === item.id);
};

export const getBookings = (offset = 0, limit = 5, search = ""): Booking[] => {
  return <Booking[]> data.Booking.slice(offset, offset + limit);
};

export const getBookingsByCustomer = (customer: string): Booking[] => {
  return <Booking[]> data.Booking.filter((
    item: Booking & { customerId: string },
  ) => item.customerId === customer);
};

export const getBooking = (bookingId: string): Booking => {
  return <Booking> data.Booking.find((item: Booking) => bookingId === item.id);
};

export const addBooking = (booking: AddBookingInput) => {
  const newBooking = { id: `b${data.Booking.length}`, ...booking };
  data.Booking.push(newBooking);
  return newBooking;
};
