export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in keyof Pick<T, K>]?: Maybe<Pick<T, K>[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** BOOKING */
  DateTime: any;
};

export type MutationResponse = {
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};


export type Booking = {
  __typename?: 'Booking';
  id: Scalars['ID'];
  customer: Customer;
  property: Property;
  startTime: Scalars['DateTime'];
  endTime: Scalars['DateTime'];
};

export type BookingQueryResponse = MutationResponse & {
  __typename?: 'bookingQueryResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  bookings: Array<Maybe<Booking>>;
};

export type AddBookingInput = {
  propertyId: Scalars['ID'];
  customerId: Scalars['ID'];
  startTime: Scalars['DateTime'];
  endTime: Scalars['DateTime'];
};

export type AddBookingMutationResponse = MutationResponse & {
  __typename?: 'addBookingMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  booking?: Maybe<Booking>;
};

/** CUSTOMER */
export type Person = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Vehicle = Bike | Car;

export type Bike = {
  __typename?: 'Bike';
  id: Scalars['ID'];
  bikeType?: Maybe<Scalars['String']>;
};

export type Car = {
  __typename?: 'Car';
  id: Scalars['ID'];
  licensePlate?: Maybe<Scalars['String']>;
};

export type Customer = Person & {
  __typename?: 'Customer';
  id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  address?: Maybe<Address>;
  vehicle?: Maybe<Vehicle>;
  bookings?: Maybe<Array<Booking>>;
};


export type CustomerBookingsArgs = {
  limit?: Maybe<Scalars['Int']>;
};

export type AddCustomerInput = {
  name: Scalars['String'];
  email: Scalars['String'];
};

/** Descrizione d'esempio di un tipo */
export type Address = {
  __typename?: 'Address';
  /** Descrizione d'esempio di un field (multi-line) */
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type AddCustomerMutationResponse = MutationResponse & {
  __typename?: 'addCustomerMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  customer?: Maybe<Customer>;
};

/** PROPERTY */
export type Property = {
  __typename?: 'Property';
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<PropertyType>;
};

export enum PropertyType {
  Villa = 'VILLA',
  Studio = 'STUDIO'
}

export type AddPropertyInput = {
  name: Scalars['String'];
  type?: Maybe<PropertyType>;
};

export type AddPropertyMutationResponse = MutationResponse & {
  __typename?: 'addPropertyMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  property?: Maybe<Property>;
};

/** QUERY & MUTATION */
export type Query = {
  __typename?: 'Query';
  bookings?: Maybe<Array<Booking>>;
  customers?: Maybe<Array<Customer>>;
  properties?: Maybe<Array<Property>>;
};


/** QUERY & MUTATION */
export type QueryBookingsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBooking?: Maybe<AddBookingMutationResponse>;
  addCustomer?: Maybe<AddCustomerMutationResponse>;
  addProperty?: Maybe<AddPropertyMutationResponse>;
};


export type MutationAddBookingArgs = {
  input?: Maybe<AddBookingInput>;
};


export type MutationAddCustomerArgs = {
  input?: Maybe<AddCustomerInput>;
};


export type MutationAddPropertyArgs = {
  input?: Maybe<AddPropertyInput>;
};
