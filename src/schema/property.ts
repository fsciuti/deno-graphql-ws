export const PropertyTypes = `
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

extend type Query {
    properties: [Property!]
}

extend type Mutation {
    addProperty(input: addPropertyInput): addPropertyMutationResponse
}
`;