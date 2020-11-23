import * as db from '../data/db.ts';

export const propertyResolvers = {
    Query: {
        properties() {
            return db.getProperties();
        }
    },
    PropertyType: {
        STUDIO: "STUDIO",
        VILLA: "VILLA"
    }
}