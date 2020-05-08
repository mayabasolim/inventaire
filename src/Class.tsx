export type InventoryObjet = {
    id: string;
    designation: string;
    quantity: number;
    commentaire: string;
    inventory: Inventory;
};

export type Inventory = {
    id: string;
    date: Date;
    description: string;
    local: Local;
};

export type Local = {
    id: string;
    name: string;
    ref: string;
    address: string;
};

export type TypeObject = {};
