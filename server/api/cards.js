const Cards = {
	0: {
		id: 0,
		emoji: '⚠️',
		displayName: 'error',
		description: `this card does not exist anymore`,
		cardType: 1,
		rarity: 0,
		isTargetCard: false,
		isTargetPlayer: true,
		isTargetSelfCard: false,
		onUse: () => {},
	},
	10: {
		id: 10,
		emoji: '🏢',
		displayName: 'Au au',
		description: 'Limpeh go salakau fight gang lmao who u',
		cardType: 1,
		rarity: 0,
		isTargetCard: true,
		isTargetPlayer: true,
		isTargetSelfCard: false,
	},
	11: {
		id: 11,
		emoji: '🏢',
		displayName: 'hub11',
		description: 'test',
		cardType: 0,
		rarity: 0,
		value: 10,
		baseIncome: 2,
		step: 2,
		industry: 2,
	},
	25: {
		id: 25,
		emoji: '🏢',
		displayName: 'hub25',
		description: 'test',
		cardType: 0,
		rarity: 0,
		value: 10,
		baseIncome: 1,
		step: 2,
		industry: 2,
	},
	101: {},
	102: {},
	103: {},
	104: {},
	105: {},
	106: {},
	107: {},
};

const getCardById = (id) => (Cards[id] != undefined ? Cards[id] : Cards[0]);

const unwrapHubCard = ({
	id,
	emoji,
	displayName,
	description,
	cardType,
	rarity,
	value,
	baseIncome,
	step,
	industry,
}) => ({
	id,
	emoji,
	displayName,
	description,
	cardType,
	rarity,
	value,
	baseIncome,
	step,
	industry,
});

const unwrapActionCard = ({
	id,
	emoji,
	displayName,
	description,
	cardType,
	rarity,
	isTargetCard,
	isTargetPlayer,
	isTargetSelfCard,
}) => ({
	id,
	emoji,
	displayName,
	description,
	cardType,
	rarity,
	isTargetCard,
	isTargetPlayer,
	isTargetSelfCard,
});

const unwrapCard = (card) =>
	card.cardType == 1 ? unwrapActionCard(card) : unwrapHubCard(card);

async function useCard(req, res) {
	console.log(req);
}

async function getCards(req, res) {
	const unwrapped = {};
	Object.keys(Cards).forEach((key) => {
		unwrapped[key] = unwrapCard(Cards[key]);
	});
	res.json(unwrapped);
}

module.exports = { Cards, useCard, getCards };
