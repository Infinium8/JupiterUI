import classNames from 'classnames';
import { icons } from '../data/icons';

interface Props {
	title: string;
	text: string;
	state: boolean;
	close(): void;
	showButtons?: boolean
}

const Modal = ({ title, text, state, close, showButtons = true }: Props) => {
	return (
		<div className='j-modal' aria-expanded={state} onClick={() => close()}>
			<div className='j-modal-inner' onClick={ev => ev.stopPropagation()}>
				<a className='j-modal-close' onClick={() => close()}>
					<i className='j-icon'>{icons.close}</i>
				</a>
				<div className='j-modal-content'>
					<h3 className='j-modal-title'>{title}</h3>
					<p className='j-modal-text'>{text}</p>
				</div>
				<div className={classNames('j-modal-buttons', !showButtons && 'hide')}>
					<a className='j-modal-button' onClick={() => close()}>
						Cancel
					</a>
					<a className='j-modal-button' onClick={() => close()}>
						Okay
					</a>
				</div>
			</div>
		</div>
	);
};

export default Modal;
