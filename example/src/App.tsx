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

			<ComponentsHero>
				Jupiter's <span className='text-accent'>Layout</span>
			</ComponentsHero>

			<Layouts />
			
			<ComponentsHero>
				Jupiter's <span className='text-accent'>Components</span>
			</ComponentsHero>

			<Components />
		</>
	);
};

export default App;
