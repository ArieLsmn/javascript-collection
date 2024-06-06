
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  function editProperty(object, key, value) {
    if (isNumber(value)) value = parseInt(value);
    object[key] = value;
  }

function addToCart(srcArray, destArray, itemId, itemCount) {
    let ob = srcArray.find(e => e.id == itemId);
    //console.log(ob);
    let cartObj = {
        item: ob,
        quantity: parseInt(itemCount)
    }
    destArray.push(cartObj);
}

function editItem(cartArray, itemId, prop, val) {

    let ob = cartArray.find(x => { return x.item.id == itemId });
    console.log(ob);

    if (prop == "quantity") {
        editProperty(cartArray.find(x => { return x.item.id == itemId }), prop, val);
        console.log(cartArray.find(x => { return x.item.id == itemId }));

    } else {
        if (prop in ob.item) {
            editProperty(cartArray.find(x => { return x.item.id == itemId }).item, prop, val);
            //cartArray[idx][select] = val;
            console.log("New data:");
            console.log(cartArray.find(x => { return x.item.id == itemId }));
            
        } else console.log("Error: property not found\n");
    }
}
function deleteItem(cartArray,itemId) {
    let idx = cartArray.findIndex(x => { return x.item.id == itemId });
    cartArray.splice(idx, 1);
    console.log(cartArray);
} 