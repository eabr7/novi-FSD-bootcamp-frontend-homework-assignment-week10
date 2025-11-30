import {inventory} from "../constants/inventory.js";


function sortSportProduct() {

    const sport = inventory.sort((a, b) => {
            return b.refreshRate - a.refreshRate;
        }
    );

    console.log(sport);


}

export default sortSportProduct;