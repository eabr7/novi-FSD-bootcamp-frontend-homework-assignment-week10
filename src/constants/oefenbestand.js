// oefenbestand.js
import {inventory} from './inventory.js';

function showOefeningOneInConsole () {

    // opdracht 1a
    const productTypes = inventory.map((value) => {
        return value.type;
        }
    );
    console.log(productTypes);

    // opdracht 1b
    const productsSold = inventory.filter((value) => {
            if (value.sold === value.originalStock) {
                return value;
            }
        }
    );
    console.log(productsSold);

    // opdracht 1c
    const specificTv = inventory.find((value) => {
            if (value.type === 'NH3216SMART') {
                return value;
            }
        }
    );
    console.log(specificTv);

    // opdracht 1d
    const sportTvs = inventory.map((value) => {
            if (value.refreshRate >= 100) {
                return `name: ${value.brand} ${value.name}, suitable: TRUE`
            } else {
                return `name: ${value.brand} ${value.name}, suitable: FALSE`
            }
        }
    );
    console.log(sportTvs);

    // opdracht 1e
    const bigTvs = inventory.filter((value) => {
        return value.availableSizes.find((screen) => {
            return screen >= 65;
        });
        }
    );
    console.log(bigTvs);

    // opdracht 1f
    const ambilightTvs = inventory.filter((value) => {
        const ambilight = value.options.find((option) => {
            return option.name === 'ambiLight';
        });

        return ambilight.applicable === true;
        }
    );
    console.log(ambilightTvs);

}


export default showOefeningOneInConsole;