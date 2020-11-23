import * as db from '../data/db.ts'
import type { MutationAddCustomerArgs } from "../schema/types/schemaTypes.ts";

export const customerResolvers = {
  Query: {
    customers() {
      return db.getCustomers();
    },
  },
  Mutation: {
    addCustomer(_parent: any, { input }: MutationAddCustomerArgs) {
      const customer = db.addCustomer(input!);
      return {
        code: 200,
        success: true,
        message: "Customer was added!",
        customer
      };
    },
  },
  Customer: {
    bookings(parent: any) {
      return db.getBookingsByCustomer(parent.id);
    },
    vehicle(parent: any) {
      return db.getVehicle(parent.vehicleId);
    },
  },
  Vehicle: {
    __resolveType(parent: any) {
      if (parent.licensePlate) {
        return 'Car';
      } else if (parent.bikeType) {
        return 'Bike';
      } else {
        throw new Error('Could not resolve Vehicle type');
      }
    },
  },
};
