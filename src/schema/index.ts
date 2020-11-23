import { gql } from '../config/deps.ts';

export const schema = (gql)`
interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
}

"""
BOOKING
"""
scalar DateTime

type Booking {
    id: ID!
    propertyId: ID!
    customer: Customer!
    property: Property!
    startTime: DateTime!
    endTime: DateTime!
}

type bookingQueryResponse implements MutationResponse { # also named: addCustomerMutationPayload
    code: String!
    success: Boolean!
    message: String!
    bookings: [Booking]! 
}

input addBookingInput {
    propertyId: ID!
    customerId: ID!
    startTime: DateTime!
    endTime: DateTime! 
}

type addBookingMutationResponse implements MutationResponse { # also named: addBookingMutationPayload
    code: String!
    success: Boolean!
    message: String!
    booking: Booking
}

"""
CUSTOMER
"""
interface Person {
    id: ID!
    name: String!
}

union Vehicle = Bike | Car

type Bike {
    id: ID!
    bikeType: String
}
  
type Car {
    id: ID!
    licensePlate: String
}

type Customer implements Person {
    id: ID!
    email: String!
    name: String!
    address: Address
    vehicle: Vehicle
    bookings(
        "Descrizione d'esempio di un argomento"
        limit: Int
        ): [Booking!]
}

input addCustomerInput {
    name: String!
    email: String!
}

"Descrizione d'esempio di un tipo"
type Address {
  """
  Descrizione d'esempio di un field (multi-line)
  """
  street: String
  city: String
  state: String
  zip: String
}

type addCustomerMutationResponse implements MutationResponse { # also named: addCustomerMutationPayload
    code: String!
    success: Boolean!
    message: String!
    customer: Customer 
}

"""
PROPERTY
"""
type Property {
    id: ID!
    name: String!
    type: PropertyType
}

enum PropertyType {
    VILLA
    STUDIO
}

input addPropertyInput {
    name: String!
    type: PropertyType
}
  
type addPropertyMutationResponse implements MutationResponse { # also named: addPropertyMutationPayload
    code: String!
    success: Boolean!
    message: String!
    property: Property
}

"""
QUERY & MUTATION
"""
type Query {
    bookings(offset: Int, limit: Int, search: String): [Booking!]
    customers: [Customer!]
    properties: [Property!]
}

type Mutation {
    addBooking(input: addBookingInput): addBookingMutationResponse
    addCustomer(input: addCustomerInput): addCustomerMutationResponse
    addProperty(input: addPropertyInput): addPropertyMutationResponse
}
`;