import type { ChildrenOnly } from '../../types/utility';

const Section = ({ children }: ChildrenOnly) => (
	<section className='section flex-c border-top-ui-2 dark-border-color-black'>
		<div className='container flex-c'>
			<div className='mw-25r w-100p'>
				{children}
			</div>
		</div>
	</section>
);

export default Section;