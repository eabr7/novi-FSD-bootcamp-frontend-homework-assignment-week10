import totalSold from "./totalSold.js";
import totalAcquisition from "./totalAcquisition.js";

function inStock(productInventory) {
let bought = totalAcquisition(productInventory);
let sold = totalSold(productInventory);
return bought - sold;
}

export default inStock;


