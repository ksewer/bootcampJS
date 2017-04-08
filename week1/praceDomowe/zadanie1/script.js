var qty = 101, // Ilość zakupionych produktów
	priceUnit = 10, // Podstawowa cena jednostkowa bez rabatu
	discount; // Wysokość rabatu

if (qty >= 5 && qty <= 20) {
	discount = 0.05;
}
else if (qty >= 21 && qty <= 50) {
	discount = 0.1;
}
else if (qty >= 51 && qty <= 100) {
	discount = 0.15;
}
else if (qty > 100) {
	discount = 0.2;
}
console.log('Podstawowa cena produktu to ' + priceUnit + 'zł, po obniżce to ' + (priceUnit - (priceUnit * discount)) + 'zł');