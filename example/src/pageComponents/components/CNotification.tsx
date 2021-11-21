import { icons } from '../../data/icons';
import Section from './Section';

const CNotification = () => (
	<Section>
		<div>
			<div className='w-100p mb-1r flex-sb'>
				<h2 className='mb-0'>Notifications</h2>
			</div>
		</div>

		<div>
			<p className='text-dynamic-07 fs-xs'>Example:</p>
			<div className='undefined j-notif' id='CHkNC'>
				<span>This is a notification</span>
				<a>
					<i className='j-icon'>{icons.close}</i>
				</a>
			</div>
		</div>
	</Section>
);

export default CNotification;
