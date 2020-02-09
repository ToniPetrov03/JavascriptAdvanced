function solve(juices) {
    const [juiceQuantity, order] = juices.reduce((juicesData, juiceData) => {
        const [juicesQuantity, order] = juicesData;
        const [juice, quantityStr] = juiceData.split(' => ');
        const quantity = parseInt(quantityStr);

        if (juicesQuantity[juice]) {
            juicesQuantity[juice] += quantity;
        } else {
            juicesQuantity[juice] = quantity;
        }

        if (juicesQuantity[juice] >= 1000 && !order.includes(juice)) {
            order.push(juice);
        }

        return juicesData;
    }, [{}, []]);

    return order.map(juice => `${juice} => ${Math.floor(juiceQuantity[juice] / 1000)}`).join('\n');
}
