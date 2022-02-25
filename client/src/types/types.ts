export enum CardRarity {
	COMMON,
	RARE,
	EPIC,
	LEGENDARY,
}

export enum Industry {
	FOOD,
	TECH,
	CLOTHES,
}

export enum Step {
	SUPPLIER,
	MANUFACTURER,
	DISTRIBUTER,
	RETAILER,
}

export enum CardType {
	HUB,
	ACTION,
}

export interface CardFlag {
	effector: {
		playerId: number;
		cardId: number;
	};
	isTemporary: boolean;
	turnsLeft?: number;
	incomeBoost: number;
	isStolen: boolean;
}

export interface CardInstance {
	instanceId: number;
	card: Card;
	mods?: any;
	flags?: CardFlag[];
}

export interface Card {
	instanceId?: number;
	id: number;
	emoji: string;
	displayName: string;
	description: string;
	cardType: CardType;
	rarity: CardRarity;
}

export interface HubCard extends Card {
	value: number;
	baseIncome: number; //$ per turn generated by the card
	industry: Industry;
	step: Step;
}

export interface ActionCard extends Card {
	isTargetSelfCard: boolean;
	isTargetPlayer: boolean;
	isTargetCard: boolean;
}

export interface UserDataMin {
	id: number;
	displayName: string;
}

export interface UserDataBasic extends UserDataMin {
	id: number;
	displayName: string;
	netWorth: number;
	netEarnings: number;
}

export interface UserData extends UserDataBasic {
	id: number;
	displayName: string;
	cardIds: {
		instanceId: number;
		cardId: number;
	}[];
	cash: number;
	netWorth: number;
	netEarnings: number;
	assetValue: number;
	incomePerTurn: number;
	expensesPerTurn: number;
}

export interface ActionLog {
	userId: number;
	cardId: number;
	instanceId?: number;
	targetId?: number;
	targetCardId?: number;
	selfCardId?: number;
}

export enum TradeStatus {
	PENDING,
	ACCEPTED,
	REJECTED,
}

export interface TradeOffer {
	id: number;
	from: UserDataMin;
	to: UserDataMin;
	cardIdsFrom: number[];
	cashFrom: number;
	cardIdsTo: number[];
	cashTo: number;
	status: TradeStatus;
}
