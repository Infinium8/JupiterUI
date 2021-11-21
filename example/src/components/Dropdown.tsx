import { useState } from 'react';

interface Item {
	id: string;
	label: string;
}

interface Props {
	trigger: React.ReactNode;
	items: Item[];
	mods?: string;
}

const Dropdown = ({ trigger, items, mods }: Props) => {
	const [state, setState] = useState(false);

	return (
		<div
			className='j-dropdown mr-1r portrait-mb-2r portrait-mr-0'
			aria-expanded={state}
		>
			<a
				className='j-dropdown-trigger shallow-link'
				onClick={() => setState(!state)}
			>
				{trigger}
			</a>
			<ul className='j-dropdown-menu slide-down shadow-md'>
				{items.map(e => {
					if (e.label === 'separator') {
						return (
							<li key={e.id} className='j-dropdown-divider'></li>
						);
					} else {
						return (
							<li key={e.id}>
								<a className='j-dropdown-link'>{e.label}</a>
							</li>
						);
					}
				})}
			</ul>
		</div>
	);
};

export default Dropdown;
