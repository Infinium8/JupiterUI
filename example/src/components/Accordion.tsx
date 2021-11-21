import { useState } from 'react';
import { icons } from '../data/icons';

interface Props {
	title: string;
	children: React.ReactNode;
}

const Accordion = ({ title, children }: Props) => {
	const [state, setState] = useState(false);

	return (
		<div className='j-accordion w-100p' aria-expanded={state}>
			<div className='j-acc-trigger' onClick={() => setState(!state)}>
				<div className='flex flex-row w-100p justify-sb align-c'>
					<h3 className='mb-0 fs-lg fw-600'>{title}</h3>
					<i className='j-icon'>{icons.downChevron}</i>
				</div>
			</div>
			<div className='j-acc-content'>
				<div className='p-1r'>
					<p className='mb-0'>{children}</p>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
