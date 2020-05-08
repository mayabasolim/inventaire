import React from "react";

import { Inventory } from "../Class";

interface Props {
    details: Inventory;
    setCurrentInventory: (invent: Inventory) => void;
}

const AnInventory = (props: Props) => {
    const { setCurrentInventory, details } = props;
    return (
        <li>
            <li>{details.date.toString()}</li>
            <button onClick={() => setCurrentInventory(details)}>X</button>
        </li>
    );
};

export default AnInventory;
