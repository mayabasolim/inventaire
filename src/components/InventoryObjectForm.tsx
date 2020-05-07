import React, { useState, ChangeEvent, FormEvent } from "react";

import { InventoryObjet } from "../Class";

interface Props {
    onInventaireObjectAdd: (inventoryObjectForm: InventoryObjet) => void;
}

const InventoryObjectForm = (props: Props) => {
    const { onInventaireObjectAdd } = props;
    const [designation, setDesignation] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [description, setDescription] = useState<string>("");

    const handleDesignation = (event: ChangeEvent<HTMLInputElement>) => {
        setDesignation(event.target.value);
    };
    const handleQuantity = (event: ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(event.target.value));
    };
    const handleDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const id = new Date().getTime().toString();
        onInventaireObjectAdd({ id, designation, quantity, description });

        setDesignation("");
        setQuantity(parseInt(""));
        setDescription("");
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
                value={description}
                onChange={handleDescription}
                type="text"
                placeholder="Ajouter une description"
            />
            <button>Confirmer</button>
        </form>
    );
};

export default InventoryObjectForm;
