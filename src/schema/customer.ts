export const CustomerTypes = `
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

extend type Query {
    customers: [Customer!]
}

extend type Mutation {
    addCustomer(input: addCustomerInput): addCustomerMutationResponse
}
`;