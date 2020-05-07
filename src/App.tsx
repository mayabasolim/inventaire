import React, { useState } from "react";

import InventoryObject from "./components/InventoryObject";
import InventoryObjectForm from "./components/InventoryObjectForm";
import { InventoryObjet } from "./Class";

const App = () => {
    const [inventoryObjets, setInventoryObjets] = useState<
        Array<InventoryObjet>
    >([
        {
            id: "A000",
            designation: "Chaises",
            quantity: 4,
            description: "Chaises",
        },
        {
            id: "A100",
            designation: "Climatiseurs",
            quantity: 4,
            description: "Climatiseurs",
        },
        {
            id: "A200",
            designation: "Ordinateurs",
            quantity: 4,
            description: "Ordinateurs",
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

    const handleAdd = (inventoryObjet: InventoryObjet) => {
        const inventoryObjetsCopy = [...inventoryObjets];
        inventoryObjetsCopy.push(inventoryObjet);

        setInventoryObjets(inventoryObjetsCopy);
    };

    return (
        <div>
            <ul>
                {inventoryObjets.map((inventoryObjet) => (
                    <InventoryObject
                        key={inventoryObjet.id}
                        details={inventoryObjet}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <InventoryObjectForm onInventaireObjectAdd={handleAdd} />
        </div>
    );
};

export default App;
