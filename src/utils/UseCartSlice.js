import { createSlice, current } from "@reduxjs/toolkit";
import { useDeferredValue } from "react";

//let basket = [];

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      //  state.item.push(action.payload);
     // console.log(current(state), "checking");
      const cartItemIdcheck = action.payload;
     // console.log(cartItemIdcheck);

      let search = state.item.find(
        (x) => x.items?.card?.info?.id == cartItemIdcheck?.card?.info?.id
      );
      if (search == undefined) {
        state.item.push({
          items: cartItemIdcheck,
          itemNo: 1,
        });
      } else {
        search.itemNo += 1;
      }
     // console.log(current(state), "final-checking");
    },
    increment: (state, action) => {
      //console.log(action.payload, "ACTION");
      //console.log(current(state));
      const incrementItemNo = action.payload;

      const ItemId = incrementItemNo.items.card.info.id;

      const updatedItems = state.item.filter((x) => {
        if (x.items.card.info.id == ItemId) {
         // console.log("yes");
         // console.log(x.itemNo);
          x.itemNo = x.itemNo + 1;
        }
      });
    },

    removeItem: (state, action) => {
      const removeItemcart = action.payload;

      const removeItemId = removeItemcart.items.card.info.id;

      const updatedItems = state.item.filter(
        (x) => x.items.card.info.id !== removeItemId
      );

      // const updatedItems=state.item.filter((x)=>{
      //   if(x.items.card.info.id !== removeItemId){
      //    return x
      // }
      //  })

      state.item = updatedItems;
      //console.log(updatedItems);
    },

    clearItem: (state, action) => {
      state.item.length = 0;
    },
    allPrice: (state, action) => {
      const storeItem = state.item;
      // console.log(storeItem);
    },
  },
});
//console.log(basket, "basket");

export const { addItem, removeItem, clearItem, increment, allPrice } =
  CartSlice.actions;
export default CartSlice.reducer;
