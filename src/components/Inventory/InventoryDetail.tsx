import React from "react";

import { InventoryItem } from "../../Class";

interface Props {
    details: InventoryItem;
    handleDetailInventory: (invent: InventoryItem) => void;
}

const InventoryDetail = (props: Props) => {
    const { handleDetailInventory, details } = props;
    return (
        <tr>
            <td>{details.date.toLocaleString()}</td>
            <td>{details.description}</td>
            <td>
                <button onClick={() => handleDetailInventory(details)}>
                    Détail
                </button>
            </td>
        </tr>
    );
};

export default InventoryDetail;
