function type1(consumptions, table){
        let baseCost = table.baseCost;
        let additionalCost = table.additionalKwhCost
        table.annualCost = ((12 * baseCost) + (consumptions * additionalCost));
}
function type2(consumptions, table){
        let baseCost = table.baseCost;
        let additionalCost = table.additionalKwhCost
        let includedKwh = (table.includedKwh / 100);
        table.here = (consumptions - includedKwh);
        var annualCost = 0;
        if ((consumptions - includedKwh) > 0) {
                annualCost = baseCost + ((consumptions - includedKwh) * additionalCost);
        } else{
                annualCost = baseCost;
        }
        table.annualCost = annualCost;
}

module.exports = {
	type1,
	type2,
};
