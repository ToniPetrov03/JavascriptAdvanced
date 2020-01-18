function solve(fruit, weightGrams, price) {
    const weightKilo = weightGrams / 1000;

    return `I need $${(price * weightKilo).toFixed(2)} to buy ${weightKilo.toFixed(2)} kilograms ${fruit}.`
}
