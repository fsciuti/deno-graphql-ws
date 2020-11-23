import * as db from '../data/db.ts'
import type { Booking, Customer, MutationAddBookingArgs, Property } from "../schema/schemaTypes.ts";

export const bookingResolvers = {
    Query: {
        bookings(_parent: any, { offset = 0, limit = 5, search = '' }): Booking[] {
            return db.getBookings(offset, limit);
        },
    },
    Booking: {
        customer(parent: any): Customer {
            return db.getCustomer(parent.customerId);
        },
        property(parent: any): Property {
            return db.getProperty(parent.propertyId);
        }
    },
    Mutation: {
        addBooking(_parent: any, { input }: MutationAddBookingArgs) {
            const booking = db.addBooking(input!);
            return {
                code: 200,
                success: true,
                message: "Booking was added!",
                booking
            };
        },
    },
};
