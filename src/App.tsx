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
					<p style={{ marginBottom: '0.3rem' }}> GPA: 3.92/4.0</p>
				</div>
				<div style={{ width: '100%' }}>
					<p id="head" style={{ marginBottom: '0.3rem' }}>
						BBA Finance
					</p>
					<p style={{ marginBottom: '0.3rem' }}>
						University of Houston - Houston, TX
					</p>
					<p style={{ marginBottom: '0.3rem' }}>
						Graduated: May 2015
					</p>
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
						Designed and built a Deletion Module to free up <strong>80%</strong> of
						database containing low-traffic Ads.
					</li>
					<li>
						Developed <strong>Lambda</strong> function to transfer <strong>bulk data</strong> among
						sub-systems using AWS services.
					</li>
					<li>
						Completed the project <strong>2 weeks</strong> ahead of schedule,
						incorporating all <strong>stretched goals</strong>.
					</li>
					<li>
						Aim of the project: To enable Amazon to manage Ads
						globally on Bing & Google search engines.
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
						Tutored and graded <strong>30+</strong> graduate students in an
						<strong>Algorithms Analysis</strong> course.
					</li>
					<li>
						Hosted <strong>20</strong> weekly tutoring sessions to help students with
						their coursework and exam preparation.
					</li>
				</ul>
			</div>

			<br />
			<hr />
			<br />
			<div id="header">SELECTED PROGRAMMING PROJECTS</div>
			<div style={{ marginBottom: '1rem' }}>
				<p style={{ display: 'flex' }}>
					<span id="head">St. Francis House Seattle | </span>
					<span>Community Volunteer Project</span>
					<span style={{ flex: 1 }}></span>
					<span>Jan 2023 - Present</span>
				</p>

				<ul>
					<li>
						Built a web app that <strong>currently serves hundreds</strong> of
						vulnerable people in Seattle each week.
					</li>
					<li>
						Migrated <strong>230,000</strong> data points from <strong>MySQL</strong> database to
						<strong>Firestore No-SQL</strong> database.
					</li>
					<li>
						Implemented caching using <strong>React Query</strong>, <strong>React Context</strong> and
						<strong>Hooks</strong> that speeds up <strong>100x</strong> page load by removing
						unnecessary data fetching at component level.
					</li>
					<li>
						Technologies: Typescript, React, NextJS, Jest, Firebase.
					</li>
				</ul>
			</div>

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
						Developed and deployed a <strong>REST API</strong> endpoint for database
						operations used by internal systems.
					</li>
					<li>
						Built a <strong>CI/CD</strong> pipeline using <strong>GitHub Actions</strong>, integrated
						with <strong>Azure App Service</strong> & <strong>SQL Server</strong>.
					</li>
					<li>
						Implemented a Cloud File Browser component integrated
						with <strong>Egnyte Cloud File Storage</strong>.
					</li>
					<li>
						Technologies: C#, ASP.NET, Azure App Service, SQL Server
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
						Implemented <strong>K-Means clustering</strong> algorithm using <strong>MPI</strong> and a
						<strong>Map-Reduce</strong> parallelization strategy.
					</li>
					<li>
						Developed a <strong>Distributed Hash Table (DHT)</strong> with <strong>Consistent
						Hashing</strong> technique used for mapping hashed keys to a
						scalable set of nodes in a <strong>Chord</strong> System to support
						massive data.
					</li>
					<li>Technologies: C++, Python, MPI</li>
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
					<li>
						Invited to become a <strong>co-founder</strong> at the conclusion of the
						internship.
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
