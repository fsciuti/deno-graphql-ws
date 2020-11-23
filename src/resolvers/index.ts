import { bookingResolvers } from "./booking.ts";
import { customerResolvers } from "./customer.ts";
import { propertyResolvers } from './property.ts';
export const resolvers = [ propertyResolvers, customerResolvers, bookingResolvers ];