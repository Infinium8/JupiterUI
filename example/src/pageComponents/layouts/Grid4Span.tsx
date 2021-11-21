import GridItem from '../../components/GridItem';
import GridLayout from './GridLayout';

const Grid4Span = () => (
	<GridLayout title='4 Column Grid with 2-span'>
		<div className='w-100p grid grid-4 landscape-grid-2'>
			<GridItem mods="grid-span-column-2" />
			<GridItem />
			<GridItem />
		</div>
	</GridLayout>
);

export default Grid4Span;
