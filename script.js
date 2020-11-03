class CoffeeMachine {
    // capacityCoffee;
    // capacityWater;
    // water;
    // coffee;
    // portionAmericano;
    // portionEspresso;
    // portionDoubleEspresso;
    // portionWater;
    // isEnought = true;

    countCupsAmericano = 0;
    countCupsEspresso = 0;
    countCupsDoubleEspresso = 0;

    constructor(capacityCoffee,
        capacityWater,
        portionAmericano,
        portionEspresso,
        portionDoubleEspresso,
        portionWater) {
        this.capacityCoffee = capacityCoffee;
        this.capacityWater = capacityWater;
        this.portionAmericano = portionAmericano;
        this.portionEspresso = portionEspresso;
        this.portionDoubleEspresso = portionDoubleEspresso;
        this.portionWater = portionWater;
        this.water = capacityWater;
        this.coffee = capacityCoffee;
    }

    // makeAmericano() {
    //     if (checkComponents(this.portionAmericano)) {
    //         this.water -= this.portionWater;
    //         this.coffee -= this.portionAmericano;
    //     };
    // }

    // makeEspresso() {
    //     if (checkComponents(this.portionEspresso)) {
    //         this.water -= this.portionWater;
    //         this.coffee -= this.portionEspresso;
    //     };
    // }

    // makeEspresso() {
    //     if (checkComponents(this.portionDoubleEspresso)) {
    //         this.water -= this.portionWater;
    //         this.coffee -= this.portionDoubleEspresso;
    //     };
    // }

    // checkComponents(portionCoffee) {
    //     let isEnought = true;
    //     console.log(this.portionCoffee);

    //     if (this.water - this.portionWater < 0) {
    //         alert("Не достаточно воды для приготовления кофе. Необходимо залить воду в бак!");
    //         isEnought = false;
    //     }

    //     if (this.coffee - this.portionCoffee < 0) {
    //         alert("Не достаточно кофе в машине. Необходимо добвить кофе в машину!");
    //         isEnought = false;
    //     }
    //     return isEnought;

    // }

    // chargeWater() {
    //     if (this.water == this.capacityWater) {
    //         alert("Бак с водой полон, заправка не требуется!");
    //         return
    //     }
    //     let addedWater = this.capacityWater - this.water;
    //     this.water = this.capacityWater;
    //     alert("Залито: " + addedWater + "мл. воды. Бак полный.");
    // }

    chargeCoffee() {
        if (this.coffee == this.capacityCoffee) {
            alert("Контейнер с кофе полон!");
            return
        }
        let addedCoffee = this.capacityCoffee - this.coffee;
        this.coffee = this.capacityCoffee;
        alert("Добавлено: " + addedCoffee + "гр. кофе. Контейнер полный.");
    }

    getWater() {
        return water;
    }

    setWater(portionWater) {
        this.water -= portionWater;
    }



    getCoffee() {
        return coffee;
    }

    setCoffee(portionCoffee) {
        this.coffee -= portionCoffee;
    }
}


let coffeeMachine = new CoffeeMachine(100, 5000, 5, 7, 14, 200);
console.log(coffeeMachine);


function makeAmericano1() {
    let portionCoffee = coffeeMachine.portionAmericano;
    let portionWater = coffeeMachine.portionWater;

    if (checkComponents(coffeeMachine, portionCoffee, portionWater)) {
        coffeeMachine.setCoffee(portionCoffee);
        coffeeMachine.setWater(portionWater);
        coffeeMachine.countCupsAmericano++;
        alert("Американо готов!");
    };
    console.log(coffeeMachine);
}

function makeEspresso1() {
    let portionCoffee = coffeeMachine.portionEspresso;
    let portionWater = coffeeMachine.portionWater;

    if (checkComponents(coffeeMachine, portionCoffee, portionWater)) {
        coffeeMachine.setCoffee(portionCoffee);
        coffeeMachine.setWater(portionWater);
        coffeeMachine.countCupsEspresso++;
        alert("Espresso готов!");
    };
    console.log(coffeeMachine);
}

function makeDoubleEspresso1() {
    let portionCoffee = coffeeMachine.portionDoubleEspresso;
    let portionWater = coffeeMachine.portionWater;

    if (checkComponents(coffeeMachine, portionCoffee, portionWater)) {
        coffeeMachine.setCoffee(portionCoffee);
        coffeeMachine.setWater(portionWater);
        coffeeMachine.countCupsDoubleEspresso++;
        alert("DoubleEspresso готов!");
    };
    console.log(coffeeMachine);
}

function chargeWater() {
    if (coffeeMachine.water == coffeeMachine.capacityWater) {
        alert("Бак с водой полон, заправка не требуется!");
        return
    }
    let addedWater = coffeeMachine.capacityWater - coffeeMachine.water;
    coffeeMachine.water = coffeeMachine.capacityWater;
    alert("Залито: " + addedWater + "мл. воды. Бак полный.");
}

function chargeCoffee() {
    if (coffeeMachine.coffee == coffeeMachine.capacityCoffee) {
        alert("Контейнер с кофе полон!");
        return
    }
    let addedCoffee = coffeeMachine.capacityCoffee - coffeeMachine.coffee;
    coffeeMachine.coffee = coffeeMachine.capacityCoffee;
    alert("Добавлено: " + addedCoffee + "гр. кофе. Контейнер полный.");
}

function information() {
    alert(`Приготовлено: ${coffeeMachine.countCupsAmericano} чашек Americano, 
Приготовлено: ${coffeeMachine.countCupsEspresso} чашек Espresso,
Приготовлено: ${coffeeMachine.countCupsDoubleEspresso} чашек Double Espresso`);
}


function checkComponents(coffeeMachine, portionCoffee, portionWater) {

    let isEnought = true;
    console.log(portionWater);
    console.log(portionCoffee);

    if (coffeeMachine.water - portionWater < 0) {
        alert("Не достаточно воды для приготовления кофе. Необходимо залить воду в бак!");
        isEnought = false;
    }

    if (coffeeMachine.coffee - portionCoffee < 0) {
        alert("Не достаточно кофе в машине. Необходимо добвить кофе в машину!");
        isEnought = false;
    }
    return isEnought;

}