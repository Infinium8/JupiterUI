import { useState } from 'react';
import classNames from 'classnames';

import { icons } from '../data/icons';

interface Props {
	color: string;
	title: string;
}

const SelectableTile = ({ color, title }: Props) => {
	const [selected, setSelected] = useState(false);

	return (
		<div
			className={classNames(
				'j-tile mb-1r selectable',
				color,
				selected && 'selected'
			)}
			onClick={() => setSelected(!selected)}
		>
			<p className='mb-0 text-dynamic-07'>
				Selectable{' '}
				<span className={classNames('fw-500', `text-${color}-60`)}>{title}</span>
			</p>
			<div className='j-tile-check'>
				<i className='j-icon'>{icons.check}</i>
			</div>
		</div>
	);
};

export default SelectableTile;
