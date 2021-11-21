import Section from '../Section';

import { icons } from '../../data/icons';

const CIcons = () => (
	<Section>
		<div>
			<div className='w-100p mb-1r flex-sb'>
				<h2 className='mb-0'>Icons</h2>
			</div>
			<p>Uses the standard sizing convention.</p>
		</div>

		<div>
			<p className='text-dynamic-07 fs-xs'>Example:</p>
			<div className='flex flex-row flex-wrap justify-s'>
				<i className='j-icon xs mr-1r'>{icons.search}</i>
				<i className='j-icon sm mr-1r'>{icons.search}</i>
				<i className='j-icon lg mr-1r'>{icons.search}</i>
				<i className='j-icon xl mr-1r'>{icons.search}</i>
				<i className='j-icon xxxl text-accent'>{icons.search}</i>
			</div>
		</div>
	</Section>
);

export default CIcons;
