import axios from "axios";

export interface ItemDomain {
    item_id: number;
    item: string;
}

export const getItemById = async (itemId: number): Promise<ItemDomain | null> => {
    try {
        const response = await axios.get<ItemDomain>(`http://localhost:8000/api/v1/item/${itemId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching item by ID:", error);
        return null;
    }
};
