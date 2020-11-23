import * as db from '../data/db.ts'
import { GQLError, GraphQLScalarType, Kind } from "./../config/deps.ts";
import type { Booking, Customer, MutationAddBookingArgs, Property } from "../schema/types/schemaTypes.ts";


// Custom Scalar
const DateTime = new GraphQLScalarType({
    name: 'DateTime',
    description: 'Date custom scalar type',
    parseValue(value: any) {
      return value; // value from the client
    },
    serialize(value: any) {
      return value; // value sent to the client
    },
    parseLiteral(ast: any) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  });

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
        addBooking(_parent: any, { input }: MutationAddBookingArgs, context: any) {
            if (!context.authToken) {
                throw new GQLError({type: "Auth error", detail: "you must be logged in!"});
            }

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
