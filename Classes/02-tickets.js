function tickets(ticketsArr, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets = ticketsArr.map(ticket => {
        const [destination, priceStr, status] = ticket.split('|');
        const price = parseFloat(priceStr);

        return new Ticket(destination, price, status);
    });

    const sortingCriteria = {
        'destination': (tickets) => tickets.sort((a, b) => a.destination.localeCompare(b.destination)),
        'price': (tickets) => tickets.sort((a, b) => a.price - b.price),
        'status': (tickets) => tickets.sort((a, b) => a.status.localeCompare(b.status))
    };

    return sortingCriteria[criterion](tickets);
}
