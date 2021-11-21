import classNames from 'classnames';

interface Props {
	mods?: string;
}

const GridItem = ({ mods = '' }: Props) => (
	<div
		className={classNames('g-accent-40-60 radius-8 w-100p h-16r', mods)}
	></div>
);

export default GridItem;
