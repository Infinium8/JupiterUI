import Section from '../Section';

const CLoader = () => (
	<Section>
		<div>
			<div className='w-100p mb-1r flex-sb'>
				<h2 className='mb-0'>Loader</h2>
			</div>
		</div>

		<div>
			<p className='text-dynamic-07 fs-xs'>Example:</p>
			<div className='flex flex-row flex-wrap justify-s'>
				<div className='j-loader sm mr-1r'></div>
				<div className='j-loader md mr-1r'></div>
				<div className='j-loader lg mr-1r'></div>
				<div className='j-loader xl'></div>
			</div>
		</div>
	</Section>
);

export default CLoader;
