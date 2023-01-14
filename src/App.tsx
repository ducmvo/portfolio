function App() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				color: 'salmon',
				textTransform: 'uppercase',
				fontFamily: 'futura'
			}}
		>
			<div>My Portfolio</div>
			<div style={{fontSize: '0.7rem'}}>
				<a
					href="https://github.com/ducmvo/"
					style={{
						textDecoration: 'none',
						color: 'salmon'
					}}
				>
					github
				</a>{' '}
				|{' '}
				<a
					href="https://www.linkedin.com/in/ducmvo/"
					style={{
						textDecoration: 'none',
						color: 'salmon'
					}}
				>
					linkedin
				</a>
			</div>
		</div>
	)
}

export default App
