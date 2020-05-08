import React, { useState } from "react";

import InventoryObject from "./components/InventoryObject";
import InventoryObjectForm from "./components/InventoryObjectForm";
import InventoryForm from "./components/InventoryForm";
import { InventoryObjet, Inventory } from "./Class";

const App = () => {
    const local = {
        id: "1582898046485",
        name: "Kowffice",
        ref: "AERD24RF",
        address: "13 rue Christophe Colomb",
    };
    const [currentInventory, setCurrentInventory] = useState<Inventory>({
        id: "IIOI",
        date: new Date("01/01/2020"),
        description: "ENventaire du jour",
        local: {
            id: "1582898046485",
            name: "Kowffice",
            ref: "AERD24RF",
            address: "13 rue Christophe Colomb",
        },
    });
    const [inventories, setInventories] = useState<Array<Inventory>>([
        {
            id: "IIOI",
            date: new Date("01/01/2020"),
            description: "ENventaire du jour",
            local: {
                id: "1582898046485",
                name: "Kowffice",
                ref: "AERD24RF",
                address: "13 rue Christophe Colomb",
            },
        },
    ]);

    const [inventoryObjets, setInventoryObjets] = useState<
        Array<InventoryObjet>
    >([
        {
            id: "1582898046485",
            designation: "Chaises",
            quantity: 4,
            commentaire: "Chaises",
            inventory: {
                id: "IIOI",
                date: new Date("01/01/2020"),
                description: "ENventaire du jour",
                local: {
                    id: "1582898046485",
                    name: "Kowffice",
                    ref: "AERD24RF",
                    address: "13 rue Christophe Colomb",
                },
            },
        },
        {
            id: "15858898046485",
            designation: "Climatiseurs",
            quantity: 4,
            commentaire: "Climatiseurs",
            inventory: {
                id: "IIOI",
                date: new Date("01/01/2020"),
                description: "ENventaire du jour",
                local: {
                    id: "1582898046485",
                    name: "Kowffice",
                    ref: "AERD24RF",
                    address: "13 rue Christophe Colomb",
                },
            },
        },
        {
            id: "1588897046485",
            designation: "Ordinateurs",
            quantity: 4,
            commentaire: "Ordinateurs",
            inventory: {
                id: "IIOI",
                date: new Date("01/01/2020"),
                description: "ENventaire du jour",
                local: {
                    id: "1582898046485",
                    name: "Kowffice",
                    ref: "AERD24RF",
                    address: "13 rue Christophe Colomb",
                },
            },
        },
    ]);

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
    };

    return (
        <div>
            <InventoryForm onInventaireAdd={handleAddInventory} local={local} />
            <InventoryObjectForm
                inventory={currentInventory}
                onInventaireObjectAdd={handleAddInventoryObjet}
            />

            {`${currentInventory.date.toString()} -  ${
                currentInventory.description
            }`}
            <ul>
                {inventoryObjets
                    .filter(
                        (inventoryObjet) =>
                            inventoryObjet.inventory.id === currentInventory.id
                    )
                    .map((inventoryObjet) => (
                        <InventoryObject
                            key={inventoryObjet.id}
                            details={inventoryObjet}
                            onDelete={handleDelete}
                        />
                    ))}
            </ul>
        </div>
    );
};

export default App;
