import React, { useState } from "react";

import { LOCAL, CURRENT_INVENTORY, INVENTORY_OBJET, INENTORIES } from "./Data";
import InventoryObject from "./components/InventoryObject";
import InventoryObjectForm from "./components/InventoryObjectForm";
import AnInventory from "./components/Inventory";
import InventoryForm from "./components/InventoryForm";
import { InventoryObjet, Inventory } from "./Class";

const App = () => {
    const local = LOCAL;
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

            <hr />
            <ul>
                {inventories.map((invent) => (
                    <AnInventory
                        key={invent.id}
                        details={invent}
                        setCurrentInventory={setCurrentInventory}
                    />
                ))}
            </ul>

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
