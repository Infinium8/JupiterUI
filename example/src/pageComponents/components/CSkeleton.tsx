import Section from './Section';

const CSkeleton = () => (
	<Section>
		<div>
			<div className='w-100p mb-1r flex-sb'>
				<h2 className='mb-0'>Skeleton</h2>
			</div>
		</div>

		<div className='mb-3r'>
			<p className='text-dynamic-07 fs-xs'>Example:</p>
			<div className='skeleton w-100p'></div>
			<div className='skeleton w-90p my-1r'></div>
			<div className='skeleton w-80p'></div>
		</div>

		<div>
			<p className='text-dynamic-07 fs-xs'>Card example:</p>
			<div className='j-card w-100p'>
				<div className='j-card-image g-deep-blue-2'></div>
				<div className='j-card-content'>
					<div className='skeleton w-100p mb-0-5r'></div>
					<div className='skeleton w-90p p-8 mb-0-5r'></div>
					<div className='skeleton w-80p p-8'></div>
				</div>
			</div>
		</div>
	</Section>
);

export default CSkeleton;
