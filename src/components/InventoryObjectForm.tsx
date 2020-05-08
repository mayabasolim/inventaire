import React, { useState, ChangeEvent, FormEvent } from "react";

import { InventoryObjet, Inventory } from "../Class";

interface Props {
    onInventaireObjectAdd: (inventoryObjectForm: InventoryObjet) => void;
    inventory: Inventory;
}

const InventoryObjectForm = (props: Props) => {
    const { onInventaireObjectAdd, inventory } = props;
    const [designation, setDesignation] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [commentaire, setCommentaire] = useState<string>("");

    const handleDesignation = (event: ChangeEvent<HTMLInputElement>) => {
        setDesignation(event.target.value);
    };
    const handleQuantity = (event: ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(event.target.value));
    };
    const handleCommentaire = (event: ChangeEvent<HTMLInputElement>) => {
        setCommentaire(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const id = new Date().getTime().toString();
        onInventaireObjectAdd({
            id,
            designation,
            quantity,
            commentaire,
            inventory,
        });

        setDesignation("");
        setQuantity(parseInt(""));
        setCommentaire("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={designation}
                onChange={handleDesignation}
                type="text"
                placeholder="Ajouter une designation"
            />
            <input
                value={quantity}
                onChange={handleQuantity}
                type="number"
                placeholder="Ajouter une quantité"
            />
            <input
                value={commentaire}
                onChange={handleCommentaire}
                type="text"
                placeholder="Ajouter une commentaire"
            />
            <button>Confirmer</button>
        </form>
    );
};

export default InventoryObjectForm;
