import ToggleButtons from './pageComponents/ToggleButtons';
import Hero from './pageComponents/Hero';
import About from './pageComponents/About';
import ComponentsHero from './pageComponents/ComponentsHero';
import Layouts from './pageComponents/Layouts';
import Components from './pageComponents/Components';

const App = () => {
	return (
		<>
			<ToggleButtons />

			<Hero />

			<About />

			<ComponentsHero
				title={
					<>
						<span className='text-accent'>Layout</span> examples
					</>
				}
			>
				Jupiter has excellent support for both Flex and Grid layouts
				right out of the box. Build next-level layouts with a variety of
				very simple classes. Design for mobile with the same layout
				classes prefixed with the size you need to account for.
			</ComponentsHero>

			<Layouts />

			<ComponentsHero
				title={
					<>
						<span className='text-accent'>Component</span> examples
					</>
				}
			>
				
			</ComponentsHero>

			<Components />
		</>
	);
};

export default App;
