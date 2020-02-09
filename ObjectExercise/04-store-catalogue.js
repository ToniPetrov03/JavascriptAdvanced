function solve(arr) {
    const productsPrices = arr.reduce((productsPrices, product) => {
        const [name, price] = product.split(' : ');

        productsPrices[name] = price;

        return productsPrices;
    }, {});

    return Object.keys(productsPrices).sort((a, b) => a.localeCompare(b)).map((product, index, arr) => {
        const [firstLetter] = product;
        const [previousFirstLetter] = arr[index - 1] || [];

        return (firstLetter === previousFirstLetter ? '' : firstLetter + '\n') + `  ${product}: ${productsPrices[product]}`;
    }).join('\n');
}
