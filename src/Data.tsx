export const LOCAL = {
    id: "1582898046485",
    name: "Kowffice",
    ref: "AERD24RF",
    address: "13 rue Christophe Colomb",
};
export const CURRENT_INVENTORY = {
    id: "1582298846485",
    date: new Date("05/20/2020"),
    description: "Premier inventaire",
    local: {
        id: "1582898046485",
        name: "Kowffice",
        ref: "AERD24RF",
        address: "13 rue Christophe Colomb",
    },
};

export const INENTORY_LIST = [
    {
        id: "1582298846485",
        date: new Date("05/20/2020"),
        description: "Premier inventaire",
        local: {
            id: "1582898046485",
            name: "Kowffice",
            ref: "AERD24RF",
            address: "13 rue Christophe Colomb",
        },
    },
];

export const INVENTORY_OBJET = [
    {
        id: "1582898046485",
        designation: "Imprimante",
        quantity: 10,
        quantityRange: undefined,
        commentaire: "Imprimante",
        inventory: {
            id: "1582298846485",
            date: new Date("05/20/2020"),
            description: "Premier inventaire",
            local: {
                id: "1582898046485",
                name: "Kowffice",
                ref: "AERD24RF",
                address: "13 rue Christophe Colomb",
            },
        },
    },
    {
        id: "15858898046485",
        designation: "Machine Café",
        quantity: 2,
        quantityRange: undefined,
        commentaire: "Machine à café",
        inventory: {
            id: "1582298846485",
            date: new Date("05/20/2020"),
            description: "Premier inventaire",
            local: {
                id: "1582898046485",
                name: "Kowffice",
                ref: "AERD24RF",
                address: "13 rue Christophe Colomb",
            },
        },
    },
    {
        id: "1588897046485",
        designation: "Fontaine à eau",
        quantity: 5,
        quantityRange: undefined,
        commentaire: "Fontaine à eau",
        inventory: {
            id: "1582298846485",
            date: new Date("05/20/2020"),
            description: "Premier inventaire",
            local: {
                id: "1582898046485",
                name: "Kowffice",
                ref: "AERD24RF",
                address: "13 rue Christophe Colomb",
            },
        },
    },
    {
        id: "1588897146485",
        designation: "Verre d'eau",
        quantity: 0,
        quantityRange: { from: 20, to: 40 },
        commentaire: "Fontaine à eau",
        inventory: {
            id: "1582298846485",
            date: new Date("05/20/2020"),
            description: "Premier inventaire",
            local: {
                id: "1582898046485",
                name: "Kowffice",
                ref: "AERD24RF",
                address: "13 rue Christophe Colomb",
            },
        },
    },
];
