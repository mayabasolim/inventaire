import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input, Label, Button, Back } from "../../styles";

import { InventoryObjet, Inventory } from "../../Class";

interface Props {
    onInventaireObjectAdd: (inventoryObjectForm: InventoryObjet) => void;
    setAccessToInventoryObjectForm: (
        accessToInventoryObjectForm: boolean
    ) => void;
    inventory: Inventory;
}

const InventoryObjectForm = (props: Props) => {
    const {
        onInventaireObjectAdd,
        inventory,
        setAccessToInventoryObjectForm,
    } = props;
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
        <>
            <form onSubmit={handleSubmit}>
                <Label>Désignaton de l'objet :</Label>
                <Input
                    value={designation}
                    onChange={handleDesignation}
                    type="text"
                />
                <Label>Quantité :</Label>
                <Input
                    value={quantity}
                    onChange={handleQuantity}
                    type="number"
                />
                <Label>Commentaire :</Label>
                <Input
                    value={commentaire}
                    onChange={handleCommentaire}
                    type="text"
                />
                <div>
                    <Button>Enregistrer</Button>
                </div>
            </form>
            <Back onClick={() => setAccessToInventoryObjectForm(false)}>
                Retour
            </Back>
        </>
    );
};

export default InventoryObjectForm;
