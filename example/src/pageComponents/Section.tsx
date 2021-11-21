import classNames from 'classnames';

interface Props {
	children: React.ReactNode,
	innerMods?: string
}

const Section = ({ children, innerMods = 'mw-25r' }: Props) => (
	<section className='section flex-c border-bottom-ui-2 dark-border-color-black'>
		<div className='container flex-c'>
			<div className={classNames('w-100p', innerMods )}>
				{children}
			</div>
		</div>
	</section>
);

export default Section;