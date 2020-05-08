import React, { useState } from "react";

import { LOCAL, CURRENT_INVENTORY, INVENTORY_OBJET, INENTORIES } from "./Data";
import AnInventory from "./components/Inventory/Inventory";
import InventoryForm from "./components/Inventory/InventoryForm";
import InventoryObjectForm from "./components/InventoryObject/InventoryObjectForm";
import AnInventoryObject from "./components/InventoryObject/InventoryObject";

import { InventoryObjet, Inventory } from "./Class";
import {
    Header,
    Title,
    InfosTitle,
    Content,
    TH,
    TABLE,
    Column,
    SubTitle,
} from "./styles";

const App2 = () => {
    const local = LOCAL;

    //After choose date of inventory , you may go to the next stape to register the objects
    const [
        accessToInventoryObjectForm,
        setAccessToInventoryObjectForm,
    ] = useState<boolean>(false);

    const [currentInventory, setCurrentInventory] = useState<Inventory>(
        CURRENT_INVENTORY
    );
    const [inventories, setInventories] = useState<Array<Inventory>>(
        INENTORIES
    );
    const [inventoryObjets, setInventoryObjets] = useState<
        Array<InventoryObjet>
    >(INVENTORY_OBJET);

    const handleDelete = (id: string) => {
        const inventoryObjetsCopy = [...inventoryObjets];
        const index = inventoryObjets.findIndex(
            (inventoryObjet) => inventoryObjet.id === id
        );

        inventoryObjetsCopy.splice(index, 1);

        setInventoryObjets(inventoryObjetsCopy);
    };

    const handleAddInventoryObjet = (inventoryObjet: InventoryObjet) => {
        const inventoryObjetsCopy = [...inventoryObjets];
        inventoryObjetsCopy.push(inventoryObjet);

        setInventoryObjets(inventoryObjetsCopy);
    };

    const handleAddInventory = (newinventory: Inventory) => {
        const inventoriesCopy = [...inventories];
        inventoriesCopy.push(newinventory);

        setInventories(inventoriesCopy);
        setCurrentInventory(newinventory);
        setAccessToInventoryObjectForm(true);
    };

    const handleDetailInventory = (newinventory: Inventory) => {
        setCurrentInventory(newinventory);
        setAccessToInventoryObjectForm(true);
    };

    return (
        <>
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
                <Content>
                    <Column width={25}>
                        <InventoryForm
                            onInventaireAdd={handleAddInventory}
                            local={local}
                        />
                    </Column>
                    <Column width={75}>
                        <TABLE>
                            <thead>
                                {" "}
                                <tr>
                                    <TH>Date</TH>
                                    <TH>Description</TH>
                                    <TH>Actions</TH>
                                </tr>
                            </thead>
                            <tbody>
                                {inventories.map((invent) => (
                                    <AnInventory
                                        key={invent.id}
                                        details={invent}
                                        handleDetailInventory={
                                            handleDetailInventory
                                        }
                                    />
                                ))}
                            </tbody>
                        </TABLE>
                    </Column>
                </Content>
            )}
            {accessToInventoryObjectForm && (
                <Content>
                    <Column width={25}>
                        <InventoryObjectForm
                            inventory={currentInventory}
                            onInventaireObjectAdd={handleAddInventoryObjet}
                            setAccessToInventoryObjectForm={
                                setAccessToInventoryObjectForm
                            }
                        />
                    </Column>
                    <Column width={75}>
                        <TABLE>
                            <thead>
                                {" "}
                                <tr>
                                    <TH>Désignation</TH>
                                    <TH>Quantité</TH>
                                    <TH>description</TH>
                                    <TH>Actions</TH>
                                </tr>
                            </thead>
                            <tbody>
                                {inventoryObjets
                                    .filter(
                                        (inventoryObjet) =>
                                            inventoryObjet.inventory.id ===
                                            currentInventory.id
                                    )
                                    .map((inventoryObjet) => (
                                        <AnInventoryObject
                                            key={inventoryObjet.id}
                                            details={inventoryObjet}
                                            onDelete={handleDelete}
                                        />
                                    ))}
                            </tbody>
                        </TABLE>
                    </Column>
                </Content>
            )}
        </>
    );
};

export default App2;
