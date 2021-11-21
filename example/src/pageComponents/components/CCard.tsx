import Section from './Section';

const CCard = () => (
	<Section>
		<div>
			<div className='w-100p mb-1r flex-sb'>
				<h2 className='mb-0'>Card</h2>
			</div>
		</div>
		<div className='j-card dark-ui-1'>
			<div className='j-card-image g-accent-60-80'></div>
			<div className='j-card-content'>
				<h4>This is a card title.</h4>
				<p>This is some card content.</p>
			</div>
		</div>
	</Section>
);

export default CCard;
