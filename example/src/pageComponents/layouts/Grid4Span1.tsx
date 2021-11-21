import GridItem from '../../components/GridItem';
import GridLayout from './GridLayout';

const Grid4Span1 = () => (
	<GridLayout title='4 Column Grid with 2-span column and row'>
		<div className='w-100p grid grid-4 landscape-grid-2'>
			<GridItem mods="grid-span-column-2 grid-span-row-2 h-100p landscape-h-16r" />
			<GridItem />
			<GridItem />
			<GridItem />
			<GridItem />
		</div>
	</GridLayout>
);

export default Grid4Span1;
