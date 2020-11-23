import { gql } from "../config/deps.ts";
import { BookingTypes } from "./booking.ts";
import { PropertyTypes } from "./property.ts";
import { CustomerTypes } from "./customer.ts";

export const schema = (gql)`
interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
}

"""
QUERY & MUTATION
"""
type Query

type Mutation

${BookingTypes}
${PropertyTypes}
${CustomerTypes}
`;
