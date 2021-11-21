import { useState } from 'react';
import Modal from '../../components/Modal';

import Section from '../Section';

const CModal = () => {
	const [modal1, setModal1] = useState(false);
	const [modal2, setModal2] = useState(false);

	return (
		<Section>
			<div>
				<div className='w-100p mb-1r flex-sb'>
					<h2 className='mb-0'>Modal</h2>
				</div>
			</div>

			<div>
				<p className='text-dynamic-07 fs-xs'>Example:</p>
				<a className='j-button' onClick={() => setModal1(!modal1)}>
					Launch Modal 1
				</a>
				<a
					className='j-button my-1r ml-1r'
					onClick={() => setModal2(!modal2)}
				>
					Launch Modal 2
				</a>
			</div>

			<Modal
				title={'JupiterUI, a modern CSS design system.'}
				text={
					'Build next-level interfaces with JupiterUI. It provides a comprehensive set of classnames allowing you to build just about anything you want. Jupiter features a detailed layout system with logical and consistent classnames.'
				}
				state={modal1}
				close={() => setModal1(false)}
			/>

			<Modal
				title={'Modal title'}
				text={'This is a modal demonstrating the lack of buttons.'}
				state={modal2}
				close={() => setModal2(false)}
				showButtons={false}
			/>
		</Section>
	);
};

export default CModal;
