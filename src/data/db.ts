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

export const getProperties = () => {
    return [...data.Properties];
}
