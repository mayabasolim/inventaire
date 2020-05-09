import React, { useState } from "react";
import SimpleStorage from "react-simple-storage";

import { CURRENT_INVENTORY } from "./Data";
import Inventory from "./containers/Inventory";
import InventoryObject from "./containers/InventoryObject";
import { InventoryItem } from "./Class";
import { Header, Title, InfosTitle, SubTitle } from "./styles";

const App2 = () => {
    //After choose date of inventory , you may go to the next stape to register the objects
    const [
        accessToInventoryObjectForm,
        setAccessToInventoryObjectForm,
    ] = useState<boolean>(false);

    const [currentInventory, setCurrentInventory] = useState<InventoryItem>(
        CURRENT_INVENTORY
    );

    return (
        <>
            <SimpleStorage />
            <Header>Kowffit</Header>
            <Title>Inventaire</Title>
            <InfosTitle>
                Date:
                {currentInventory.date.toLocaleString()} <tr /> Local:{" "}
                {currentInventory.local.ref} - {currentInventory.local.name}
            </InfosTitle>
            <SubTitle>
                {accessToInventoryObjectForm
                    ? "Ajouter la quantité d'un objet "
                    : "Effectuer un nouvel Inventaire"}
            </SubTitle>

            {!accessToInventoryObjectForm && (
                <Inventory
                    setAccessToInventoryObjectForm={
                        setAccessToInventoryObjectForm
                    }
                    setCurrentInventory={setCurrentInventory}
                />
            )}

            {accessToInventoryObjectForm && (
                <InventoryObject
                    setAccessToInventoryObjectForm={
                        setAccessToInventoryObjectForm
                    }
                    currentInventory={currentInventory}
                />
            )}
        </>
    );
};

export default App2;
