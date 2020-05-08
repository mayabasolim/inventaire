import React from "react";

import { Inventory } from "../Class";

interface Props {
    onDelete: (id: string) => void;
    details: {
        id: string;
        designation: string;
        quantity: Number;
        commentaire: string;
        inventory: Inventory;
    };
}

const InventoryObject = (props: Props) => {
    const { onDelete, details } = props;
    return (
        <li>
            {details.id} {details.designation} {details.quantity}{" "}
            {details.commentaire}{" "}
            <button onClick={() => onDelete(details.id)}>X</button>
        </li>
    );
};

export default InventoryObject;
