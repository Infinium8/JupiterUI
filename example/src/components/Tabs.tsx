import { useState } from 'react';
import classNames from 'classnames';

interface TriggerProps {
	id: string;
	icon?: React.ReactNode;
	label: string;
	activeTab: string;
	setActiveTab(id: string): void;
	className: string;
	linkTextClassName: string;
}

interface TabProps {
	id: string;
	className: string;
	children: React.ReactNode;
	activeTab: string;
}

interface TabsProps {
	defaultTab?: number;
	tabs: Array<any>;
	mods?: any;
}

const Trigger = ({
	id,
	icon,
	label,
	activeTab,
	setActiveTab,
	className,
	linkTextClassName,
}: TriggerProps) => (
	<a
		className={classNames(
			'j-tab-link',
			className,
			activeTab === id && 'active'
		)}
		data-tab-for={id}
		onClick={() => setActiveTab(id)}
	>
		{icon && <i className='j-icon mr-0-25r'>{icon}</i>}
		<span className={linkTextClassName}>{label}</span>
	</a>
);

const Tab = ({ id, className, children, activeTab }: TabProps) => (
	<div
		className={classNames('j-tab', className, activeTab === id && 'active')}
		data-tab={id}
	>
		{children}
	</div>
);

const Tabs = ({ defaultTab = 0, tabs, mods }: TabsProps) => {
	const [activeTab, setActiveTab] = useState(tabs[defaultTab].id);

	return (
		<div
			className={classNames('j-tab-container', mods?.container)}
			data-active-tab={activeTab}
		>
			<div
				className={classNames(
					'j-tab-links-wrapper w-100p',
					mods?.linksContainer
				)}
			>
				<div className={classNames('j-tab-links', mods?.links)}>
					{tabs.map(e => (
						<Trigger
							key={e.id}
							id={e.id}
							label={e.label}
							icon={e.icon || null}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
							className={classNames(e?.linkClassName, mods?.link)}
							linkTextClassName={e?.linkTextClassName}
						/>
					))}
				</div>
			</div>
			<div className={classNames('j-tabs', mods?.tabs)}>
				{tabs.map((e: any) => (
					<Tab
						key={e.id}
						id={e.id}
						className={e.className || mods?.tab || null}
						activeTab={activeTab}
					>
						{e.tab}
					</Tab>
				))}
			</div>
		</div>
	);
};

export default Tabs;
