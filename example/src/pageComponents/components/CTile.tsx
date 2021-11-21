import Section from '../Section';
import SelectableTile from '../../components/SelectableTile';

const CTile = () => (
	<Section>
		<div>
			<div className='w-100p mb-1r'>
				<h2 className='mb-0'>Tile</h2>
				<p>
					The Tile is essentially just a customizeable wrapper for
					content.
				</p>
			</div>
		</div>

		<div>
			<p className='text-dynamic-07 fs-xs'>Example:</p>
			<div>
				<div className='j-tile mb-1r'>
					<p className='mb-0 text-dynamic-07'>
						<span className='fw-600 text-dynamic'>Default.</span>
					</p>
				</div>
				<div className='j-tile mb-1r darker'>
					<p className='mb-0 text-dynamic-07'>
						<span className='fw-600 text-dynamic'>Darker.</span>
					</p>
				</div>
				<div className='j-tile mb-1r clickable'>
					<p className='mb-0 text-dynamic-07'>
						<span className='fw-600 text-dynamic'>Clickable.</span>
					</p>
				</div>

				<div className='mt-3r'></div>
				<p>
					Selectable tiles are very versatile. View the Changelog to
					see what classNamees are available.
				</p>

				<SelectableTile color='accent' title='Accent' />

				<SelectableTile color='magenta' title='Magenta' />
				<SelectableTile color='purple' title='Purple' />
				<SelectableTile color='cyan' title='Cyan' />

				<div className='mt-3r'></div>
				<p>
					Selectable Tiles inside of <code>.j-tiles</code> can behave
					like radio buttons.
				</p>
			</div>
		</div>
	</Section>
);

export default CTile;
