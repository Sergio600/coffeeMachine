class CoffeeMachine {
    capacityCoffee;
    capacityWater;
    water;
    coffee;
    portionAmericano;
    portionEspresso;
    portionDoubleEspresso;
    portionWater;
    isEnought = true;

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

    makeAmericano() {
        if (checkComponents(portionAmericano)) {
            water -= portionWater;
            coffee -= portionAmericano;
        };
    };

    makeEspresso() {
        if (checkComponents(this.portionEspresso)) {
            this.water -= this.portionWater;
            this.coffee -= this.portionEspresso;
        };
    };

    makeEspresso() {
        if (checkComponents(this.portionDoubleEspresso)) {
            this.water -= this.portionWater;
            this.coffee -= this.portionDoubleEspresso;
        };
    };

    checkComponents(portionCoffee) {
        let isEnought = true;
        console.log(this.portionCoffee);

        if (this.water - portionWater < 0) {
            alert("Не достаточно воды для приготовления кофе. Необходимо залить воду в бак!");
            isEnought = false;
        }

        if (coffee - portionCoffee < 0) {
            alert("Не достаточно кофе в машине. Необходимо добвить кофе в машину!");
            isEnought = false;
        }
        return isEnought;

    };

    chargeWater() {
        if (this.water == this.capacityWater) {
            alert("Бак с водой полон, заправка не требуется!");
            return
        }
        let addedWater = this.capacityWater - this.water;
        this.water = this.capacityWater;
        alert("Залито: " + addedWater + "мл. воды. Бак полный.");
    };

    chargeCoffee() {
        if (this.coffee == this.capacityCoffee) {
            alert("Контейнер с кофе полон!");
            return
        }
        let addedCoffee = this.capacityCoffee - this.coffee;
        this.coffee = this.capacityCoffee;
        alert("Добавлено: " + addedCoffee + "гр. кофе. Контейнер полный.");
    };

    showWater() {
        return water;
    };

    showCoffee() {
        return coffee;
    };
}


let coffeeMachine = new CoffeeMachine(100, 5000, 5, 7, 14, 200);
console.log(coffeeMachine);

function makeAmericano() {
    coffeeMachine.makeAmericano();
    alert("Americano is ready!")
}