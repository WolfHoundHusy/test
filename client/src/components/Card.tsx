import { Button } from 'reactstrap';
import { ActionCard, CardType, HubCard, Industry } from '../types/types';

function IndustryToColor(industry: Industry) {
	switch (industry) {
		case Industry.FOOD:
			return 'green';
		case Industry.TECH:
			return 'blue';
		case Industry.CLOTHES:
			return 'red';
	}
}

export default function CardComponent(props: {
	card: HubCard | ActionCard;
	onClick: () => void;
}) {
	return props.card.cardType == CardType.ACTION ? (
		<ActionCardComponent
			card={props.card as ActionCard}
			onClick={props.onClick}
		/>
	) : (
		<HubCardComponent
			card={props.card as HubCard}
			onClick={props.onClick}
		/>
	);
}

function ActionCardComponent(props: { card: ActionCard; onClick: () => void }) {
	return (
		<div className='rounded-box shadow card' onClick={props.onClick}>
			<div
				className='top-color-area'
				style={{
					backgroundColor: 'none',
				}}></div>
			<h1
				style={{
					fontSize: 50,
				}}>
				{props.card.emoji}
			</h1>
			<p className='normal-and-bold no-padding'>
				{props.card.displayName}
			</p>
		</div>
	);
}

function HubCardComponent(props: { card: HubCard; onClick: () => void }) {
	return (
		<div className='rounded-box shadow card' onClick={props.onClick}>
			<div
				className='top-color-area'
				style={{
					backgroundColor: IndustryToColor(props.card.industry),
				}}></div>
			<h1
				style={{
					fontSize: 50,
				}}>
				{props.card.emoji}
			</h1>
			<p className='normal-and-bold no-padding'>
				{props.card.displayName}
			</p>
			<p className='normal-and-bold no-padding'>${props.card.value}</p>
			<p
				style={{ color: props.card.baseIncome >= 0 ? 'green' : 'red' }}
				className='normal-and-bold no-padding'>
				{props.card.baseIncome >= 0 ? '+' : '-'}${props.card.baseIncome}
			</p>
		</div>
	);
}
