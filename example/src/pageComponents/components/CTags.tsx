import classNames from 'classnames';
import Section from './Section';

const CTags = () => {
	const mods = [
		'',
		'red',
		'orange',
		'magenta',
		'purple',
		'blue',
		'cyan',
		'teal',
		'green',
		'cool-gray',
		'gray',
		'warm-gray',
		'rounded'
	]

	return (
		<Section>
			<div>
				<div className='w-100p mb-1r flex-sb'>
					<h2 className='mb-0'>Tags</h2>
				</div>
			</div>
	
			<div>
				<p className='text-dynamic-07 fs-xs'>Example:</p>
				<div>
					{mods.map(mod => (
						<div className={classNames('j-tag', mod)}>
							<span>{mod || 'Primary'}</span>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}

export default CTags;
