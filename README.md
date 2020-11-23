# deno-graphql-ws
## A simple but useful Deno &amp; GraphQL example 

This is a very simple (but useful and _quasi_ complete) example to learn Deno and GraphQL.  
It was presented (like a workshop) at Codemotion Italia 2020.

### Deno Modules
It was developed in _Deno v1.5.4_ using: 
- GraphQL.js
- OAK Framework
- OAK GraphQL

### Steps:
- Scaffolding
- HTTP Simple Server
- GraphQL.js integration
- OAK integration
- Deps.ts
- Application Class
- Application Event Listeners
- Application Middlewares
- GraphQL Schema
- GraphQL Resolvers
- Schema Typing (Created by _GraphQL Code Generator_)
- Context with Authentication
- Logger Resolver
- ...

### TODO
- [ ] DB Support
- [ ] Better Typing
- [ ] Nested Mutation 

### GraphQL Document Examples
```
# Add Properties
mutation {
  addProperty(input: { name:"Property 3", type: STUDIO }) {
    property {
      id,
    	name
    }
  }
}

# Properties
query {
	properties {
		name
	}
}

# Customers
query {
  customers {
    id,
    name,
    vehicle {
      ...on Bike {
        bikeType
      }
      ...on Car {
        licensePlate
      }
    }
  }
}

# Add Customers
mutation {
  addCustomer(input: { name:"Customer A", email: "ciccio@ciccio.it" }) {
    customer {
      id,
    	name
    }
  }
}

# Booking
query {
  bookings(limit: 100) {
    id
    customer {
      name
    }
  }
}

# Add Booking
mutation {
  addBooking(input: { propertyId: "p1", customerId: "c1", startTime:"2020-10-10", endTime:"2020-11-10"}) {
    booking {
      id
      property {
        id
        name
      }
    }
  }
}
```

Enjoy with 🦕 Deno and GraphQL!
