import { icons } from '../../data/icons';
import Section from '../Section';

const CForm = () => (
	<Section>
		<div>
			<div className='w-100p mb-1r flex-sb'>
				<h2 className='mb-0'>Form</h2>
			</div>
		</div>

		<div>
			<p className='text-dynamic-07 fs-xs'>Example:</p>
			<div className='flex-c'>
				<form>
					<label className='j-label'>Default input</label>
					<input
						type='text'
						className='j-input'
						placeholder='Input'
						name='default'
						title='Default input'
					/>

					<label className='j-label'>Thin input</label>
					<input
						type='text'
						className='j-input thin shadow-xs'
						placeholder='Input'
						name='default'
						title='Default input'
					/>

					<label className='j-label'>Icon input</label>
					<div className='j-input-container'>
						<input
							type='text'
							className='j-input'
							name='icon-input'
							title='Icon input'
						></input>
						<i className='j-icon'>{icons.search}</i>
					</div>

					<label className='j-label'>yinyang input</label>
					<div className='j-input-container'>
						<input
							type='text'
							className='j-input yinyang'
							placeholder='.yinyang'
							name='yinyang'
							title='yinyang input'
							data-icon=''
						></input>
						<i className='j-icon'>{icons.search}</i>
					</div>

					<label className='j-label'>textarea</label>
					<textarea
						className='j-input'
						placeholder='Textarea'
						name='textarea'
						title='Textarea'
					></textarea>

					<label className='j-checkbox-container'>
						Checkbox
						<input type='checkbox' defaultChecked />
						<span className='j-checkmark'></span>
					</label>

					<label className='j-radio-container'>
						Radio
						<input type='radio' />
						<span className='j-radio'></span>
					</label>

					<label className='j-radio-container'>
						Radio 1
						<input type='radio' />
						<span className='j-radio'></span>
					</label>

					<div className='flex flex-row align-c'>
						<label className='j-switch'>
							<input type='checkbox' defaultChecked />
							<span className='j-slider'></span>
						</label>
						<p className='mb-0 text-dynamic-06 ml-0-5r'>
							I'm a label
						</p>
					</div>
				</form>
			</div>
		</div>
	</Section>
);

export default CForm;
