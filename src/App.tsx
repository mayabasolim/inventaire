import React, { useState } from "react";

import { CURRENT_INVENTORY } from "./Data";
import Inventory from "./containers/Inventory";
import InventoryObject from "./containers/InventoryObject";
import { InventoryItem } from "./Class";
import { Header, Title, InfosTitle, SubTitle } from "./styles";

const App = () => {
    // localStorage.clear();
    //After choose date of inventory , you may go to the next stape to register the objects
    const [
        accessToInventoryObjectForm,
        setAccessToInventoryObjectForm,
    ] = useState<boolean>(false);

    const currentInventoryJson = localStorage.getItem("currentInventory");

    const [currentInventory, setCurrentInventory] = useState<InventoryItem>(
        () =>
            currentInventoryJson !== null
                ? JSON.parse(currentInventoryJson)
                : CURRENT_INVENTORY
    );
    return (
        <>
            <Header>Kowffit</Header>
            <Title>Inventaire</Title>
            <InfosTitle>
                Date:
                {currentInventory.date.toLocaleString()} <br />
                Local:
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

export default App;
