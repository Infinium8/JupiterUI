import GridItem from '../../components/GridItem';
import GridLayout from './GridLayout';

const Grid4 = () => (
	<GridLayout title='4 Column Grid (with landscape-grid-2)'>
		<div className='w-100p grid grid-4 landscape-grid-2'>
			<GridItem />
			<GridItem />
			<GridItem />
			<GridItem />
		</div>
	</GridLayout>
);

export default Grid4;
