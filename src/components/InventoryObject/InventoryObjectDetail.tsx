import React from "react";

import { InventoryItem } from "../../Class";

interface Props {
    onDelete: (id: string) => void;
    details: {
        id: string;
        designation: string;
        quantity?: Number;
        quantityRange?: { from: number; to: number };
        commentaire: string;
        inventory: InventoryItem;
    };
}

const InventoryObjectDetail = (props: Props) => {
    const { onDelete, details } = props;
    return (
        <tr>
            <td>{details.designation}</td>
            <td>
                {details.quantityRange
                    ? "[" +
                      details.quantityRange.from +
                      " - " +
                      details.quantityRange.to +
                      "]"
                    : details.quantity}
            </td>
            <td>{details.commentaire}</td>
            <td>
                <button onClick={() => onDelete(details.id)}>Supprimer</button>
            </td>
        </tr>
    );
};

export default InventoryObjectDetail;
