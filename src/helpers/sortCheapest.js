import {inventory} from "../constants/inventory.js";


function sortCheapest() {

    const cheapest = inventory.sort((a, b) => {
            return a.price - b.price;
        }
    );

    console.log(cheapest);
    
}

export default sortCheapest;