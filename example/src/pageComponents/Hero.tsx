const Hero = () => {
	return (
		<section className='section flex-c bg-accent-10 dark-bg-accent-100 border-bottom-ui-1'>
			<div className='container flex-c lg'>
				<div className='mw-50r flex-c text-c vivus-xs'>
					<div>
						<h1 className='fs-9xl wide-fs-8xl tablet-fs-7xl fw-600 mb-2r'>
							Jupiter<span className='text-accent'>UI</span>
						</h1>
					</div>
					<div>
						<p className='fs-2xl text-dynamic-08 lh-1-7 mw-30r mb-2r'>
							Versatile, friendly, simple: Jupiter bridges the
							gaps that other CSS design systems don't.
						</p>
					</div>

					<div className='flex flex-row align-c portrait-flex-c'>
						<a className='j-button rounded sm mr-1r portrait-mr-0 portrait-mb-1r shadow-sm'>
							Learn more
						</a>
						<a
							className='j-button shadow-sm rounded colored-ui dark-ui-2 sm portrait-mr-0 portrait-mb-1r'
							href='https://github.com/Infinium8/JupiterUI'
							target='_blank'
							rel='noreferrer noopener nofollow'
						>
							View on GitHub
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
