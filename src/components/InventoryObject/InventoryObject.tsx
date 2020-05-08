import React from "react";

import { Inventory } from "../../Class";

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
        <tr>
            <td>{details.designation}</td>
            <td>{details.quantity}</td>
            <td>{details.commentaire}</td>
            <td>
                <button onClick={() => onDelete(details.id)}>Supprimer</button>
            </td>
        </tr>
    );
};

export default InventoryObject;
