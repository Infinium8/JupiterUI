import Section from './Section';

const CLink = () => (
	<Section>
		<div>
			<div className='w-100p mb-1r flex-sb'>
				<h2 className='mb-0'>Link</h2>
			</div>
		</div>

		<div className='mb-2r'>
			<p className='text-dynamic-07 fs-xs'>Basic links:</p>
			<div className='flex flex-row flex-wrap justify-s'>
				<a className='j-link sm mr-1r'>Link .sm</a>
				<a className='j-link mr-1r'>Link Primary</a>
				<a className='j-link lg mr-1r'>Link .lg</a>
			</div>
		</div>

		<div className='mb-2r'>
			<p className='text-dynamic-07 fs-xs'>Push link:</p>
			<div className='flex flex-row flex-wrap justify-s'>
				<a className='j-link push'>Link Primary</a>
			</div>
		</div>

		<div className='mb-2r'>
			<p className='text-dynamic-07 fs-xs'>Underline links:</p>
			<div className='flex flex-row flex-wrap'>
				<a className='j-link underline mr-2r no-bg'>Link Underline</a>
				<a className='j-link underline mr-2r thin'>Link Underline</a>
				<a className='j-link underline mr-2r'>Link Underline</a>
				<a className='j-link underline md mr-2r'>Link Underline</a>
				<a className='j-link underline lg'>Link Underline</a>
			</div>
		</div>

		<div className='mb-2r'>
			<p className='text-dynamic-07 fs-xs'>Underline alt:</p>
			<div className='flex flex-row flex-wrap'>
				<a className='j-link underline mr-2r alt'>Link Underline</a>
			</div>
		</div>

		<div>
			<p className='text-dynamic-07 fs-xs'>Cover links:</p>
			<div className='flex flex-row flex-wrap justify-s'>
				<a className='j-link cover mr-2r'>
					<span>Link Cover</span>
				</a>
				<a className='j-link cover accent'>
					<span>Link Cover</span>
				</a>
			</div>
		</div>
	</Section>
);

export default CLink;
