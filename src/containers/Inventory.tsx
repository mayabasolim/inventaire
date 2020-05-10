import React, { useState } from "react";

import { LOCAL, INENTORY_LIST } from "../Data";
import InventoryDetail from "../components/Inventory/InventoryDetail";
import InventoryForm from "../components/Inventory/InventoryForm";
import { InventoryItem } from "../Class";
import { Content, TH, TABLE, Column } from "../styles";

interface Props {
    setAccessToInventoryObjectForm: (
        accessToInventoryObjectFor: boolean
    ) => void;
    setCurrentInventory: (currentInventory: InventoryItem) => void;
}

const Inventory = (props: Props) => {
    const { setAccessToInventoryObjectForm, setCurrentInventory } = props;
    const local = LOCAL;
    const inventoryListJson = localStorage.getItem("inventoryList");

    const [inventoryList, setInventoryList] = useState<Array<InventoryItem>>(
        () =>
            inventoryListJson !== null
                ? JSON.parse(inventoryListJson)
                : INENTORY_LIST
    );

    const handleAddInventory = (newinventory: InventoryItem) => {
        const inventoryListCopy = [...inventoryList];
        inventoryListCopy.push(newinventory);

        setInventoryList(inventoryListCopy);
        localStorage.setItem(
            "inventoryList",
            JSON.stringify(inventoryListCopy)
        );

        setCurrentInventory(newinventory);
        setAccessToInventoryObjectForm(true);
    };

    const handleDetailInventory = (newinventory: InventoryItem) => {
        setCurrentInventory(newinventory);
        setAccessToInventoryObjectForm(true);
    };

    return (
        <>
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
        </>
    );
};

export default Inventory;
