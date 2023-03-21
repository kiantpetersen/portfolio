import React, { useState } from "react";
import Filter from "./Filter";

const ItemList = ({ items }) => {
    const [filteredItems, setFilteredItems] = useState(items);
    console.log('Items: ', items)
    return (
        <div>
            <Filter items={items} setFilteredItems={setFilteredItems} />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
