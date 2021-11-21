import type { ChildrenOnly } from "../types/utility";

const ComponentsHero = ({ children }: ChildrenOnly) => (
	<section className='section border-bottom-ui-2'>
		<div className='container lg text-c'>
			<h2 className='fs-7xl tablet-fs-5xl'>
				{children}
			</h2>
		</div>
	</section>
);

export default ComponentsHero;
