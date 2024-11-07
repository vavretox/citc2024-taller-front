import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { getItemById, ItemDomain } from "./services/itemService";

const App: React.FC = () => {
    const [inputId, setInputId] = useState<number>(0);
    const [item, setItem] = useState<ItemDomain | null>(null);

    const handleFetchItem = async () => {
        const itemData = await getItemById(inputId);
        setItem(itemData);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Buscar Item por ID</h1>

            <div className="flex items-center space-x-2">
                <Input
                    type="number"
                    value={inputId}
                    onChange={(e) => setInputId(Number(e.target.value))}
                    placeholder="Introduce el ID del item"
                    className="px-4 py-2 border rounded-lg shadow-sm"
                />
                <Button onClick={handleFetchItem} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                    Buscar2
                </Button>
            </div>

            {item ? (
                <p className="mt-4 text-lg font-semibold text-green-600">Item: {item.item}</p>
            ) : (
                <p className="mt-4 text-gray-500">No se encontró el item o aún no se ha cargado.</p>
            )}
        </div>
    );
};

export default App;
