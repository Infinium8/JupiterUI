import Section from './Section';
import Accordion from '../../components/Accordion';

const CAccordion = () => (
	<Section>
		<div>
			<div className='w-100p mb-1r flex-sb'>
				<h2 className='mb-0'>Accordion</h2>
			</div>
			<p>A highly flexible way to compress content.</p>
		</div>
		<div>
			<p className='text-dynamic-07 fs-xs'>Example:</p>
			<Accordion title="I'm an Accordion">
				I can hide lots of content. Isn't that nice?
			</Accordion>
		</div>

		<div className='mt-1r'>
			<Accordion title="I'm another Accordion">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
				non tristique sem. Sed id erat sed mauris dapibus ullamcorper.
				Phasellus eu elit at eros consequat fermentum. Donec in metus
				faucibus, mollis nisi a, ultrices neque. Nam in nulla aliquam,
				mattis erat et, consequat nunc. Suspendisse vulputate sodales
				risus at interdum. Integer lacinia massa nisl, id tempor lacus
				vehicula id. Vivamus ornare varius nulla vitae cursus.
			</Accordion>
		</div>
	</Section>
);

export default CAccordion;
