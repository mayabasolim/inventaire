import React, { useState } from "react";

import { LOCAL, CURRENT_INVENTORY, INVENTORY_OBJET, INENTORIES } from "./Data";
import InventoryDetail from "./components/Inventory/InventoryDetail";
import InventoryForm from "./components/Inventory/InventoryForm";
import InventoryObjectForm from "./components/InventoryObject/InventoryObjectForm";
import InventoryObjectDetail from "./components/InventoryObject/InventoryObjectDetail";
import { InventoryObjetItem, InventoryItem } from "./Class";
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

const App1 = () => {
    const local = LOCAL;

    //After choose date of inventory , you may go to the next stape to register the objects
    const [
        accessToInventoryObjectForm,
        setAccessToInventoryObjectForm,
    ] = useState<boolean>(false);

    const [currentInventory, setCurrentInventory] = useState<InventoryItem>(
        CURRENT_INVENTORY
    );
    const [inventoryList, setInventories] = useState<Array<InventoryItem>>(
        INENTORIES
    );
    const [inventoryObjetList, setInventoryObjets] = useState<
        Array<InventoryObjetItem>
    >(INVENTORY_OBJET);

    const handleDelete = (id: string) => {
        const inventoryObjetListCopy = [...inventoryObjetList];
        const index = inventoryObjetList.findIndex(
            (inventoryObjet) => inventoryObjet.id === id
        );

        inventoryObjetListCopy.splice(index, 1);

        setInventoryObjets(inventoryObjetListCopy);
    };

    const handleAddInventoryObjet = (inventoryObjet: InventoryObjetItem) => {
        const inventoryObjetListCopy = [...inventoryObjetList];
        inventoryObjetListCopy.push(inventoryObjet);

        setInventoryObjets(inventoryObjetListCopy);
    };

    const handleAddInventory = (newinventory: InventoryItem) => {
        const inventoryListCopy = [...inventoryList];
        inventoryListCopy.push(newinventory);

        setInventories(inventoryListCopy);
        setCurrentInventory(newinventory);
        setAccessToInventoryObjectForm(true);
    };

    const handleDetailInventory = (newinventory: InventoryItem) => {
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
                                {inventoryList.map((invent) => (
                                    <InventoryDetail
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
                                {inventoryObjetList
                                    .filter(
                                        (inventoryObjet) =>
                                            inventoryObjet.inventory.id ===
                                            currentInventory.id
                                    )
                                    .map((inventoryObjet) => (
                                        <InventoryObjectDetail
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

export default App1;
