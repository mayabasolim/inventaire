import React, { useState } from "react";

import { INVENTORY_OBJET } from "../Data";
import InventoryObjectForm from "../components/InventoryObject/InventoryObjectForm";
import InventoryObjectDetail from "../components/InventoryObject/InventoryObjectDetail";
import { InventoryObjetItem, InventoryItem } from "../Class";
import { Content, TH, TABLE, Column } from "../styles";

interface Props {
    setAccessToInventoryObjectForm: (
        accessToInventoryObjectFor: boolean
    ) => void;
    currentInventory: InventoryItem;
}

const InventoryObject = (props: Props) => {
    const { setAccessToInventoryObjectForm, currentInventory } = props;

    const inventoryObjetListJson = localStorage.getItem("inventoryObjetList");

    const [inventoryObjetList, setInventoryObjetList] = useState<
        Array<InventoryObjetItem>
    >(() =>
        inventoryObjetListJson !== null
            ? JSON.parse(inventoryObjetListJson)
            : INVENTORY_OBJET
    );

    const handleDelete = (id: string) => {
        const inventoryObjetListCopy = [...inventoryObjetList];
        const index = inventoryObjetList.findIndex(
            (inventoryObjet) => inventoryObjet.id === id
        );

        inventoryObjetListCopy.splice(index, 1);

        setInventoryObjetList(inventoryObjetListCopy);
        localStorage.setItem(
            "inventoryObjetList",
            JSON.stringify(inventoryObjetListCopy)
        );
    };

    const handleAddInventoryObjet = (inventoryObjet: InventoryObjetItem) => {
        const inventoryObjetListCopy = [...inventoryObjetList];
        inventoryObjetListCopy.push(inventoryObjet);

        setInventoryObjetList(inventoryObjetListCopy);
        localStorage.setItem(
            "inventoryObjetList",
            JSON.stringify(inventoryObjetListCopy)
        );
    };
    console.log(inventoryObjetList);
    return (
        <>
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
        </>
    );
};

export default InventoryObject;
