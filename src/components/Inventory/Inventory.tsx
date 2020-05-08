import React from "react";

import { Inventory } from "../../Class";

interface Props {
    details: Inventory;
    handleDetailInventory: (invent: Inventory) => void;
}

const AnInventory = (props: Props) => {
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

export default AnInventory;
