import React from "react";
import "./itemList.scss";

// Définition des types pour les éléments
interface Item {
  name: string;
}

// Définition des props du composant
interface ItemListProps {
  items: Item[];
  title: string;
}

const ItemList: React.FC<ItemListProps> = ({ items, title }) => {
  return (
    <div className="item-list">
      <div className="itemList-container">
        <h3>{title}</h3>
        <div className="item-grid">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <img
                src={`./images/${item.name.toLowerCase()}.png`}
                alt={item.name}
              />
              <p className="name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
