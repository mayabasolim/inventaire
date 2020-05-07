import React from "react";

interface Props {
    onDelete: (id: string) => void;
    details: {
        id: string;
        designation: string;
        quantity: Number;
        description: string;
    };
}

const InventoryObject = (props: Props) => {
    const { onDelete, details } = props;
    return (
        <li>
            {details.id} {details.designation} {details.quantity}{" "}
            {details.description}{" "}
            <button onClick={() => onDelete(details.id)}>X</button>
        </li>
    );
};

export default InventoryObject;
