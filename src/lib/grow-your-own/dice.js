const Dice = ()  => {}

const roll = (num = 1) => {
	if (isNaN(num) || num < 1) {
		num = 1;
	}
	let total = 0;
	for (let i = 0; i < num; i++) {
		total += (Math.floor(Math.random() * 6) + 1);
	}
	return total;
}
Dice.roll = roll;
module.exports = Dice;
