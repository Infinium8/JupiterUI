import Section from '../Section';
import Dropdown from '../../components/Dropdown';
import { icons } from '../../data/icons';

const CDropdown = () => (
	<Section>
		<div>
			<div className='w-100p mb-1r flex-sb'>
				<h2 className='mb-0'>Dropdown</h2>
			</div>
			<p>
				Also known as "overflow menus." You can see the different
				structures in the
				<code>index.html</code> file.
			</p>
		</div>

		<div>
			<p className='text-dynamic-07 fs-xs'>Example:</p>
			<div className='flex flex-row flex-wrap justify-s align-c'>
				<Dropdown
					trigger={<div className='j-avatar md g-accent-60-80'></div>}
					items={[
						{
							id: 'profile',
							label: 'Profile',
						},
						{
							id: 'billing',
							label: 'Billing',
						},
						{
							id: 'preferences',
							label: 'Preferences',
						},
						{
							id: 'sep1',
							label: 'separator',
						},
						{
							id: 'logout',
							label: 'Logout',
						},
					]}
				/>
				<Dropdown
					trigger={
						<div className='j-button gray app icon-only j-dropdown-trigger'>
							<i className='j-icon'>{icons.dots}</i>
						</div>
					}
					items={[
						{
							id: 'profile',
							label: 'Profile',
						},
						{
							id: 'billing',
							label: 'Billing',
						},
						{
							id: 'preferences',
							label: 'Preferences',
						},
						{
							id: 'sep1',
							label: 'separator',
						},
						{
							id: 'logout',
							label: 'Logout',
						},
					]}
				/>
			</div>
		</div>
	</Section>
);

export default CDropdown;
