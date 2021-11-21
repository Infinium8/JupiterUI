import Tabs from '../../components/Tabs';
import { icons } from '../../data/icons';
import Section from './Section';

const CTabs = () => (
	<Section>
		<div>
			<div className='w-100p mb-1r flex-sb'>
				<h2 className='mb-0'>Tabs</h2>
			</div>
		</div>

		<div className='mb-3r'>
			<p className='text-dynamic-07 fs-xs'>Example:</p>
			<Tabs
				mods={{ linksContainer: 'flex' }}
				tabs={[
					{
						id: '1',
						label: 'Search',
						icon: icons.search,
						tab: (
							<div className="p-2r">
								<p>I'm a search tab</p>
							</div>
						)
					},
					{
						id: '2',
						label: 'Color',
						icon: icons.colorSwatch,
						tab: (
							<div className="p-2r">
								<p>I'm a color tab</p>
							</div>
						)
					},
					{
						id: '3',
						label: 'Moon',
						icon: icons.moon,
						tab: (
							<div className="p-2r">
								<p>I'm a moon tab</p>
							</div>
						)
					},
				]}
			/>
		</div>

		<div>
			<p className='text-dynamic-07 fs-xs'>
				With <code>.round</code>:
			</p>
			<Tabs
				mods={{ linksContainer: 'flex', links: 'round active-accent' }}
				tabs={[
					{
						id: '1',
						label: 'Search',
						icon: icons.search,
						tab: (
							<div className="p-2r">
								<p>I'm a search tab</p>
							</div>
						)
					},
					{
						id: '2',
						label: 'Color',
						icon: icons.colorSwatch,
						tab: (
							<div className="p-2r">
								<p>I'm a color tab</p>
							</div>
						)
					},
					{
						id: '3',
						label: 'Moon',
						icon: icons.moon,
						tab: (
							<div className="p-2r">
								<p>I'm a moon tab</p>
							</div>
						)
					},
				]}
			/>
		</div>
	</Section>
);

export default CTabs;
