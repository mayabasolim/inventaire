import { format } from "path";

export type InventoryObjetItem = {
    id: string;
    designation: string;
    quantity?: number;
    quantityRange?: { from: number; to: number };
    commentaire: string;
    inventory: InventoryItem;
};

export type InventoryItem = {
    id: string;
    date: Date;
    description: string;
    local: LocalItem;
};

export type LocalItem = {
    id: string;
    name: string;
    ref: string;
    address: string;
};

export type TypeObject = {};
