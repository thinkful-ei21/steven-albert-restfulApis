'use strict';

/* global shoppingList, store, Item, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});


// testing area below

api.getItems((items) => {
  const item = items[0];
  api.updateItem(item.id, { name: 'foobar' }, () => {
    console.log('updated!');
  });
});

//   api.getItems((items) => {
//     items.forEach((item) => store.addItem(item));
//     shoppingList.render();
//   });


// this is old code for when data is not from server
// store.items.push(Item.create('apples'));