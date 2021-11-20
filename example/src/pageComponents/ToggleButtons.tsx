import { useEffect, useState } from 'react';
import { icons } from '../data/icons';

interface ButtonProps {
	onClick(): void;
	icon: React.ReactNode;
}

const ToggleButton = ({ onClick, icon }: ButtonProps) => (
	<button
		className='j-button h-3r w-3r icon-only radius-90 ml-1r'
		onClick={() => onClick()}
	>
		<i className='j-icon'>{icon}</i>
	</button>
);

const ToggleButtons = () => {
	const [theme, setTheme] = useState('light');
	const [accent, setAccent] = useState(0);

	const colors = [
		'blue',
		'cyan',
		'teal',
		'purple',
		'magenta',
		'orange',
		'red',
		'green',
	];

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	const getNextAccent = () => {
		return accent + 1 === colors.length ? 0 : accent + 1;
	};

	const cycleAccent = () => {
		setAccent(getNextAccent());
	};

	useEffect(() => {
		const html = document.querySelector('html');

		if (html) html.classList.add(theme);

		return () => {
			if (html) html.classList.remove(theme);
		};
	}, [theme]);

	useEffect(() => {
		const body = document.querySelector('body');

		if (body) body.classList.add(colors[accent]);

		return () => {
			if (body) body.classList.remove(colors[accent]);
		};
	}, [accent]);

	return (
		<div className='fixed right-16 bottom-16 flex flex-row align-c'>
			<ToggleButton
				onClick={() => toggleTheme()}
				icon={theme === 'light' ? icons.moon : icons.sun}
			/>
			<ToggleButton
				onClick={() => cycleAccent()}
				icon={icons.colorSwatch}
			/>
		</div>
	);
};
export default ToggleButtons;
