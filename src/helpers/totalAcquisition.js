function totalAcquisition(productInventory) {
    let products = 0;

    for (let i = 0; i < productInventory.length; i++) {
        products += productInventory[i].originalStock;
    }

    return products;
}

export default totalAcquisition;


