import GridItem from '../../components/GridItem';
import GridLayout from './GridLayout';

const Grid3 = () => (
	<GridLayout title='3 Column Grid'>
		<div className='w-100p grid grid-3'>
			<GridItem />
			<GridItem />
			<GridItem />
		</div>
	</GridLayout>
);

export default Grid3;
