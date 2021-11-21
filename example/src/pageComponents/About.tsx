import type { ChildrenOnly } from '../types/utility';

const Text = ({ children }: ChildrenOnly) => (
	<h4 className='text-dynamic-07 fw-400 mb-2r'>{children}</h4>
);

const About = () => (
	<section className='section border-bottom-ui-2'>
		<div className='container flex-c'>
			<div className='mw-50r'>
				<h3>
					Jupiter<span className='text-accent'>UI</span> is a{' '}
					<span className='text-accent'>comprehensive</span>{' '}
					compilation of CSS rules that make-up an entire{' '}
					<span className='text-accent'>atomic design</span> system.
				</h3>
				<Text>
					Jupiter is a hassle-free, zero-dependency design system for
					modern web applications. It remains out of the way to allow
					you to design what you need to. It's a single CSS file,
					giving you the liberty to implement it however you need.
				</Text>
				<Text>
					It's packed with an exhaustive layout system, fully-styled
					components, and so much more. All delivered to you in a
					guarentee of under 500KB (usually under 350KB, not gzipped).
				</Text>
			</div>
		</div>
	</section>
);

export default About;
