import * as db from "../data/db.ts";
import {
  MutationAddPropertyArgs,
  PropertyType,
} from "../schema/types/schemaTypes.ts";

export const propertyResolvers = {
  Query: {
    properties() {
      return db.getProperties();
    },
  },
  Mutation: {
    addProperty(_parent: any, { input }: MutationAddPropertyArgs) {
      const property = db.addProperty(input!);
      return {
        code: 200,
        success: true,
        message: "Property was added!",
        property,
      };
    },
  },
  PropertyType: {
    STUDIO: PropertyType.Studio,
    VILLA: PropertyType.Villa,
  },
};
