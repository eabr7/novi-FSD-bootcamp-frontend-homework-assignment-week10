import inchToCm from "./inchToCm.js";


function tvSizes(bestTv) {
    let size = [];

    for (let i = 0; i < bestTv.availableSizes.length; i++) {
        let inches = bestTv.availableSizes[i];
        size.push(`${inches} inches (${inchToCm(inches)} cm)`);
    }

    return size.join(' | ');

}

export default tvSizes;


