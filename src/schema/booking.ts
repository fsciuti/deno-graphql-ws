export const BookingTypes = `
"""
BOOKING
"""
scalar DateTime

type Booking {
    id: ID!
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

extend type Query {
    bookings(offset: Int, limit: Int, search: String): [Booking!]
}

extend type Mutation {
    addBooking(input: addBookingInput): addBookingMutationResponse
}
`;
