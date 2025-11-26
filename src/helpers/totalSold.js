function totalSold(productInventory) {
    let products = 0;

    for (let i = 0; i < productInventory.length; i++) {
        products += productInventory[i].sold;
    }

    return products;
}

export default totalSold;


