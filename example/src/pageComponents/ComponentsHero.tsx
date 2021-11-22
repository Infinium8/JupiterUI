import Text from './Text';

interface Props {
	title: React.ReactNode;
	children: React.ReactNode;
}

const ComponentsHero = ({ title, children }: Props) => (
	<section className='section border-bottom-ui-2'>
		<div className='container flex-c'>
			<div className='mw-50r'>
				<h2 className='fs-7xl tablet-fs-5xl'>{title}</h2>
				<Text>{children}</Text>
			</div>
		</div>
	</section>
);

export default ComponentsHero;
