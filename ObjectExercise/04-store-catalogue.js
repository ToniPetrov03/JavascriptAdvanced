function solve(arr) {
    const productsPrices = arr.reduce((productsPrices, product) => {
        const [name, price] = product.split(' : ');

        productsPrices[name] = price;

        return productsPrices;
    }, {});

    return Object.keys(productsPrices).sort((a, b) => a.localeCompare(b)).reduce((output, product, index, arr) => {
        const [firstLetter] = product;
        const [previousFirstLetter] = arr[index - 1] || [];

        if (firstLetter !== previousFirstLetter) {
            output.push(firstLetter);
        }

        output.push(`  ${product}: ${productsPrices[product]}`);

        return output;
    }, []).join('\n');
}
