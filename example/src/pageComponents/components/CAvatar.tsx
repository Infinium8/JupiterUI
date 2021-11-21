import Section from './Section';
import classNames from 'classnames';

const CAvatar = () => {
	const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

	return (
		<Section>
			<div className='mb-2r'>
				<div className='w-100p mb-0-5r flex-sb'>
					<h2 className='mb-0'>Avatar</h2>
				</div>
				<p>
					A pre-defined box for avatars. You can customize the size
					using Jupiter's{' '}
					<code>[sm, md, lg]</code> directive.
				</p>
			</div>
			<div className='w-100p mt-1r'>
				<p className='text-dynamic-07 fs-xs'>Example:</p>
				<div className='flex flex-row flex-wrap justify-s w-100p'>
					{sizes.map(size => (
						<div
							className={classNames(
								'j-avatar mr-1r g-accent-60-80',
								size
							)}
						></div>
					))}
					<div className='j-avatar xl square shadow-md g-accent-60-80'></div>
				</div>
			</div>
		</Section>
	);
};

export default CAvatar;
