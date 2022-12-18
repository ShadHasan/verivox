const { type1, type2 } = require("../template/type");

function calculate(consumptions, products){
	var consumptions = (consumptions.consumption / 100);
	products.forEach(function(table) {
		table.c = consumptions;
		switch(table.type) {
			case 1:
				type1(consumptions, table);
				break;
			case 2:
				type2(consumptions, table);
				break;
		}
	});
	products = products.sort((a, b) => {
		if (a.annualCost < b.annualCost) {
		return -1;
		}
	});

    return products
}

module.exports = {
    calculate,
};
