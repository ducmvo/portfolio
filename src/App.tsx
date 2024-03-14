function App() {
	return (
		<div
			style={{
				height: '100vh',
				fontSize: '1.3rem'
			}}
		>
			<br />
			<br />
			<h2
				style={{
					textAlign: 'center',
					textTransform: 'uppercase',
					marginBottom: '1rem'
				}}
			>
				Duc Vo |{' '}
				<a href="mailto:dvo4@seattleu.edu">dvo4@seattleu.edu</a> |{' '}
				<a href="tel:2532853038">253-285-3038</a>
			</h2>
			<div style={{ textAlign: 'center', textTransform: 'uppercase' }}>
				<a href="https://linkedin.com/in/ducmvo">
					LINKEDIN.COM/IN/DUCMVO
				</a>{' '}
				| <a href="https://github.com/ducmvo">GITHUB.COM/DUCMVO</a>
			</div>

			<br />
			<hr />
			<br />
			<div id="header">EDUCATION</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<div style={{ width: '100%' }}>
					<p id="head" style={{ marginBottom: '0.3rem' }}>
						M.S. Computer Science
					</p>
					<p style={{ marginBottom: '0.3rem' }}>
						Seattle University - Seattle, WA
					</p>
					<p style={{ marginBottom: '0.3rem' }}>
						Expected Graduation: March 2024
					</p>
					<p style={{ marginBottom: '0.3rem' }}><strong>GPA: 3.92</strong></p>
				</div>
				<div style={{ width: '100%' }}>
					<p id="head" style={{ marginBottom: '0.3rem' }}>
						Computer Science Fundamentals Certificate
					</p>
					<p style={{ marginBottom: '0.3rem' }}>
						Seattle University - Seattle, TX
					</p>
					<p style={{ marginBottom: '0.3rem' }}>
						Graduated: June 2022
					</p>
					<p style={{ marginBottom: '0.3rem' }}><strong>GPA: 4.0</strong></p>
					<br />
				</div>
			</div>

			<br />
			<hr />
			<br />
			<div id="header">WORK EXPERIENCE</div>
			<div style={{ marginBottom: '1rem' }}>
				<p style={{ display: 'flex' }}>
					<span id="head">Software Engineering Intern | </span>
					<span>Amazon</span>
					<span style={{ flex: 1 }}></span>
					<span>Jun 2023 - Sep 2023</span>
				</p>
				<ul>
					<li>
						Designed and built a Deletion Module to free up 80% of database containing low-traffic Ads.
					</li>
					<li>
						Developed Lambda function to move bulk data among sub-systems using DynamoDB Stream and Amazon SQS, managing failed transfers using dead letter queue.
					</li>
					<li>
						Implemented optimistic locking and retry mechanism utilizing exponential backoff strategy.
					</li>
				</ul>
			</div>
			<div style={{ marginBottom: '1rem' }}>
				<p style={{ display: 'flex' }}>
					<span id="head">Teaching Assistant | </span>
					<span>
						Seattle University's Department of Computer Science
					</span>
					<span style={{ flex: 1 }}></span>
					<span>Jan 2023 - Jun 2023</span>
				</p>
				<ul>
					<li>
						Tutored and graded 30+ graduate students in an algorithm course.
					</li>
					<li>
						Hosted 20 weekly tutoring sessions to help students with their coursework and exam preparation.
					</li>
				</ul>
			</div>

			<br />
			<hr />
			<br />
			<div id="header">SELECTED PROGRAMMING PROJECTS</div>
			
			<div>
				<p style={{ display: 'flex' }}>
					<span id="head">
						DeSimone Cloud Computing Job Management |
					</span>
					<span>Graduate Capstone Project</span>
					<span style={{ flex: 1 }}></span>
					<span>Sep 2023 - March 2023</span>
				</p>
				<ul>
					<li>
						Implemented auto reload interval for data re-fetching and component re-render in interactive server-side rendering Blazor Web App, eliminating manual page refreshes by 90%.
					</li>
					<li>
						Implemented a File System Navigator component integrated with Egnyte Cloud File Storage API.
					</li>
					<li>
						Built a CI/CD pipeline using GitHub Actions, integrated with Azure App Service & SQL Server.
					</li>
					<li>
						Technologies: C#, ASP.NET, Azure App Service, SQL Server
					</li>
				</ul>
			</div>

			<div style={{ marginBottom: '1rem' }}>
				<p style={{ display: 'flex' }}>
					<span id="head">St. Francis House Seattle | </span>
					<span>Community Volunteer Project</span>
					<span style={{ flex: 1 }}></span>
					<span>Jan 2023 - Present</span>
				</p>

				<ul>
					<li>
						Built a web app that currently operates and serves hundreds of people in Seattle each week.
					</li>
					<li>
						Implemented caching using React Query, React Context and Hooks that speeds up 100x page load by removing unnecessary data fetching at component level.
					</li>
					<li>
						Migrated 230,000 data points from MySQL database to Firebase by cleaning and extracting data into JSON format, followed by new schema transformation using Python.
					</li>
					<li>
						Technologies: Typescript, React, NextJS, Jest, Firebase.
					</li>
				</ul>
			</div>

			<div style={{ marginBottom: '1rem' }}>
				<p style={{ display: 'flex' }}>
					<span id="head">Computer Science Projects | </span>
					<span>School Project</span>
					<span style={{ flex: 1 }}></span>
					<span>Sep 2022 - Sep 2023</span>
				</p>
				<ul>
					<li>
						Implemented parallel bionic sorting and prefix scan in CUDA to process millions of floating-point numbers, utilizing GPGPU with SIMT execution model, achieving a over 100x speedup.
					</li>
					<li>
						Implemented K-Means Clustering using MPI and Map-Reduce parallelization strategy.
					</li>
					<li>
						Developed a Distributed Hash Table (DHT) with Consistent Hashing technique used for mapping hashed keys to a scalable set of nodes in a Chord System to support massive data.
					</li>
					<li>Technologies: C++, Python, MPI, CUDA</li>
				</ul>
			</div>

			<div style={{ marginBottom: '1rem' }}>
				<p style={{ display: 'flex' }}>
					<span id="head">Software Engineering Intern | </span>
					<span>Molloy Moreno, LLC</span>
					<span style={{ flex: 1 }}></span>
					<span>Jun 2021 - May 2022</span>
				</p>

				<ul>
					<li>
						Worked on an <strong>8-person</strong> team, building a platform that
						helps disadvantaged K-12 students develop critical life
						skills and find success after high school.
					</li>
					<li>
						Refactored <strong>Redux</strong> store to reduce complexity and increase
						code coverage to <strong>80%</strong>.
					</li>
				</ul>
			</div>

			<br />
			<hr />
			<br />
			<div id="header">SKILLS</div>
			<div style={{ marginBottom: '1rem' }}>
				<ul>
					<li>
						C/C++, Java, C#, TypeScript, Python, HTML, CSS, SQL.
					</li>
					<li>
						React, ASP.NET, NextJS, Git, AWS, Azure, Relational
						Databases.
					</li>
					<li>
						Web Development, OOD, Software Testing, System Design,
						DevOps (CI/CD).
					</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
