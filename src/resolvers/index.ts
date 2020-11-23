import { customerResolvers } from "./customer.ts";
import { propertyResolvers } from './property.ts';
export const resolvers = [ propertyResolvers, customerResolvers ];