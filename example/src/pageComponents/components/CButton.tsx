import Section from '../Section';

const CButton = () => (
	<Section>
		<div>
			<div className='w-100p mb-1r flex-sb'>
				<h2 className='mb-0'>Button</h2>
			</div>
		</div>

		<div className='mb-3r'>
			<p className='text-dynamic-07 fs-xs'>Example:</p>
			<div className='flex w-100p flex-row flex-wrap justify-s'>
				<a className='j-button mb-1r mr-1r'>Normal</a>
				<a className='j-button gray mr-1r mb-1r'>.gray</a>
				<a className='j-button minimal mr-1r mb-1r'>.minimal</a>
				<a className='j-button ghost'>.ghost</a>
			</div>
		</div>

		<div className='mb-3r'>
			<p className='text-dynamic-07 fs-xs'>Morph Example:</p>
			<div className='flex w-100p flex-row flex-wrap justify-s'>
				<a className='j-button morph mb-1r mr-1r'>Morph</a>
				<a className='j-button morph hide-before mb-1r'>Morph alt</a>
			</div>
		</div>

		<div className='mb-3r'>
			<p className='text-dynamic-07 fs-xs'>Ghost Button:</p>
			<div className='flex w-100p flex-row flex-wrap justify-s'>
				<a className='ghost-button mb-1r mr-1r'>Ghost Button</a>
			</div>
		</div>

		<div className='mb-3r'>
			<p className='text-dynamic-07 fs-xs'>Colored:</p>
			<div className='flex w-100p flex-row flex-wrap justify-s'>
				<a className='j-button mb-1r mr-1r magenta'>.magenta</a>
				<a className='j-button mb-1r mr-1r purple'>.purple</a>
				<a className='j-button mb-1r mr-1r blue'>.blue</a>
			</div>
		</div>
	</Section>
);

export default CButton;
