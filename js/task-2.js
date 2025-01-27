function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage('Australia', 120, 50));
console.log(getShippingMessage('France', 150, 20));
console.log(getShippingMessage('Canada', 200, 30));
