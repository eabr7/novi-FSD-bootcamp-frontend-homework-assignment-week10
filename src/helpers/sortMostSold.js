import {inventory} from "../constants/inventory.js";

function sortMostSold() {

    const mostSold = inventory.sort((a, b) => {
            return b.sold - a.sold;
        }
    );

    console.log(mostSold);

}

export default sortMostSold;