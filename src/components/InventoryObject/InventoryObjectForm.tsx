import React, { useState, ChangeEvent, FormEvent } from "react";

import { Input, Label, Button, Back, InputRanger } from "../../styles";
import { InventoryObjetItem, InventoryItem } from "../../Class";

interface Props {
    onInventaireObjectAdd: (inventoryObjectForm: InventoryObjetItem) => void;
    setAccessToInventoryObjectForm: (
        accessToInventoryObjectForm: boolean
    ) => void;
    inventory: InventoryItem;
}

const InventoryObjectForm = (props: Props) => {
    const {
        onInventaireObjectAdd,
        inventory,
        setAccessToInventoryObjectForm,
    } = props;
    const [designation, setDesignation] = useState<string>("");
    const [useRange, setUseRange] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(0);
    const [from, setFrom] = useState<number>();
    const [to, setTo] = useState<number>();
    const [commentaire, setCommentaire] = useState<string>("");

    const handleDesignation = (event: ChangeEvent<HTMLInputElement>) => {
        setDesignation(event.target.value);
    };
    const handleUseRange = (event: ChangeEvent<HTMLInputElement>) => {
        setUseRange(event.target.checked);
    };
    const handleQuantity = (event: ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(event.target.value));
    };
    const handleFrom = (event: ChangeEvent<HTMLInputElement>) => {
        setFrom(parseInt(event.target.value));
    };
    const handleTo = (event: ChangeEvent<HTMLInputElement>) => {
        setTo(parseInt(event.target.value));
    };
    const handleCommentaire = (event: ChangeEvent<HTMLInputElement>) => {
        setCommentaire(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const id = new Date().getTime().toString();

        var quantityRange = undefined;
        if (useRange && from && to) quantityRange = { from: from, to: to };

        onInventaireObjectAdd({
            id,
            designation,
            quantity,
            quantityRange,
            commentaire,
            inventory,
        });

        setDesignation("");
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

                <Label>
                    Quantité
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={useRange}
                        onChange={handleUseRange}
                    />
                    Utiliser une fourchette
                </Label>
                {!useRange && (
                    <Input
                        value={quantity}
                        onChange={handleQuantity}
                        type="number"
                    />
                )}
                {useRange && (
                    <div>
                        <InputRanger
                            value={from}
                            onChange={handleFrom}
                            type="number"
                            placeholder="from"
                        />
                        -
                        <InputRanger
                            value={to}
                            onChange={handleTo}
                            type="number"
                            placeholder="to"
                        />
                    </div>
                )}

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
