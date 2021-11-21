import Section from '../Section';

interface Props {
	title: string,
	children: React.ReactNode
}

const GridLayout = ({ title, children }: Props) => (
	<Section innerMods='mw-none'>
		<div className="mb-2r">
			<h4>{title}</h4>
		</div>

		{children}
	</Section>
);

export default GridLayout;
