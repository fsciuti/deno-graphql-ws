import { AddPropertyInput, Property } from '../schema/schemaTypes.ts';

const data: any = {
    Properties: [
        {
            id: 'p1',
            name: 'Property P1',
            type: 'VILLA'
        },
        {
            id: 'p2',
            name: 'Property P2',
            type: 'STUDIO'
        },
    ]
};

export const getProperties = (): Property[] => {
    return <Property[]>[...data.Properties];
}

export const getProperty = (propertyId: string): Property => {
    return <Property>data.Properties.find((item: Property) => propertyId === item.id);
}

export const addProperty = (property: AddPropertyInput) => {
    const newProperty: Property = { id: `p${++getProperties().length}`, ...property };
    data.Properties.push(newProperty);
    return newProperty;
}
