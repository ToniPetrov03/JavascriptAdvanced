function solve(cars) {
    cars.reduce((carsData, car) => {
        const [brand, model, numStr] = car.split(' | ');
        const num = parseInt(numStr);

        if (carsData.has(brand)) {
            if (carsData.get(brand).has(model)) {
                const currentNum = carsData.get(brand).get(model);

                carsData.get(brand).set(model, num + currentNum);
            } else {
               carsData.get(brand).set(model, num);
            }
        } else {
            carsData.set(brand, new Map([[model, num]]));
        }

        return carsData;
    }, new Map()).forEach((models, brand) => {
        console.log(brand);

        models.forEach((num, model) => console.log(`###${model} -> ${num}`));
    });
}
