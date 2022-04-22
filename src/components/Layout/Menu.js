import React from "react";
import Card from "../UI/Card";
import MenuItem from "./MenuItem";
import classes from "./Menu.module.css";
import CartContext from "../Cart/cart-context";

const Menu = () => {
  console.log("Rendering Menu");

  const menuItems = [
    {
      id: "i1",
      name: "california roll",
      description: "a sushi roll",
      price: 10,
    },
    {
      id: "i2",
      name: "angus burger",
      description: "moooooooooooooooooooo",
      price: 12,
    },
    {
      id: "i3",
      name: "romen",
      description: "shit thrown into a pot... pretty good",
      price: 8,
    },
  ];

  const { updateItemCount } = React.useContext(CartContext);
  let items = [];

  const addToPreCartHandler = (newItem) => {
    const existingCartItemIndex = items.findIndex(
      (item) => item.id === newItem.id
    );
    const existingCartItem = items[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...items[existingCartItemIndex],
        amount: newItem.amount,
      };
      items[existingCartItemIndex] = updatedItem;
    } else {
      items = items.concat(newItem);
    }
  };

  const menuContent = (
    <ul className={classes["menu-items"]}>
      {menuItems.map((menuItem) => {
        return (
          <MenuItem
            key={menuItem.id}
            id={menuItem.id}
            price={menuItem.price}
            name={menuItem.name}
            description={menuItem.description}
            onAddToPreCart={addToPreCartHandler}
          />
        );
      })}
    </ul>
  );
  return <Card>{menuContent}</Card>;
};

export default Menu;
