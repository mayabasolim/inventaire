import React, { useState, ChangeEvent, FormEvent } from "react";

import { Inventory, Local } from "../../Class";
import { Input, Label, Button } from "../../styles";

interface Props {
    onInventaireAdd: (inventory: Inventory) => void;
    local: Local;
}

const InventoryForm = (props: Props) => {
    const { onInventaireAdd, local } = props;

    const [description, setDescription] = useState<string>("");
    const date = new Date();

    const handleDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };
    /*  const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(new Date(event.target.value));
    };
 */
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const id = date.getTime().toString();
        onInventaireAdd({
            id,
            description,
            date,
            local,
        });

        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Label>
                Inventaire du local {local.name} le: {date.toLocaleString()}
            </Label>
            <Input
                value={description}
                onChange={handleDescription}
                type="text"
                placeholder="Ajouter une description"
            />

            <Button>Confirmer</Button>
        </form>
    );
};

export default InventoryForm;
