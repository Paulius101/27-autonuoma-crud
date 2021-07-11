class CarRental {
    constructor() {
        this.list = []

    }
    intro() {
        let count = this.list.length
        console.log(`Hi, we are CityBird and we have ${count} cars available.`);
    }

    addCar(model, color, price) {

        this.list.push({
            'model': model,
            'color': color,
            'price': price
        })
        // console.log(this.list);
    }

    carPark() {
        for (let i = 0; i < this.list.length; i++) {
            const object = this.list[i];
            console.log(
                `${[i + 1]}. ${object.model} (${object.color}) is for ${object.price}EUR/day.`
            );
        }
    }
    updateCarPrice(index, newPrice) {
        this.list[index].price = newPrice
        console.log(this.list);
    }

    carPark() {
        for (let i = 0; i < this.list.length; i++) {
            const object = this.list[i];
            console.log(
                `${[i + 1]}. ${object.model} (${object.color}) is for ${object.price}EUR/day.`
            );
        }
    }

    carAccident(index) {

    }
    carRepair(index) {
        for (let i = 0; i < this.list.length; i++) {
        }
    }


    removeCar(index) {
        const newList = [];
        for (let i = 0; i < this.list.length; i++) {
            let element = this.list[i];
            if (i !== index) {
                newList.push(element)
            }
            this.list = newList;
        }
    }

module.exports = CarRental;