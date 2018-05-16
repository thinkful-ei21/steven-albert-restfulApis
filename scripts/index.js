'use strict';

/* global shoppingList, store, Item, api */

$(document).ready(function() {
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
  shoppingList.bindEventListeners();
  shoppingList.render();
  // console.log(store.items);
  // store.findAndUpdate("cjh99v1us000m0k5e9xc5gsn2", {name: 'something else'});
});


// testing area below

// api.getItems((items) => {
//   const item = items[0];
//   api.updateItem(item.id, { name: 'foobar' }, () => {
//     console.log('updated!');
//   });
// });


// this is old code for when data is not from server
// store.items.push(Item.create('apples'));