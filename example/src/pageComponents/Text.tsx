import type { ChildrenOnly } from '../types/utility';

const Text = ({ children }: ChildrenOnly) => (
	<p className='text-dynamic-07 fs-2xl lh-1-7 mb-2r'>{children}</p>
);

export default Text;