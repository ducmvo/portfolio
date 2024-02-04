function App() {
	return (
		<div
			style={{
				height: '100vh',
				fontSize: '1.3rem',
			}}
		>
			<br />
			<br />
			<h2 style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: '1rem' }}>
				Duc Vo | <a href='mailto:dvo4@seattleu.edu'>dvo4@seattleu.edu</a> | <a href='tel:2532853038'>253-285-3038</a>
			</h2>
			<div style={{ textAlign: 'center', textTransform: 'uppercase'}}>
				<a href="https://linkedin.com/in/ducmvo">LINKEDIN.COM/IN/DUCMVO</a> | <a href="https://github.com/ducmvo">GITHUB.COM/DUCMVO</a>
			</div>

			<br /><hr /><br />
			<div id="header">EDUCATION</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div style={{width: '100%'}}>
					<p id="head" style={{marginBottom: '0.3rem'}}>M.S. Computer Science</p>
					<p style={{marginBottom: '0.3rem'}}>Seattle University - Seattle, WA</p>
					<p style={{marginBottom: '0.3rem'}}>Expected Graduation: March 2024</p>
					<p style={{marginBottom: '0.3rem'}}> GPA: 3.92/4.0</p>
				</div>
				<div style={{width: '100%'}}>
					<p id="head" style={{marginBottom: '0.3rem'}}>BBA Finance</p>
					<p style={{marginBottom: '0.3rem'}}>University of Houston - Houston, TX</p>
					<p style={{marginBottom: '0.3rem'}}>Graduated: May 2015</p>
					<br/>
				</div>
			</div>

			<br /><hr /><br />
			<div id="header">WORK EXPERIENCE</div>
			<div style={{ marginBottom: '1rem' }}>
				<p>
					<span id="head">Software Engineering Intern</span>
					<span> | Amazon | Jun 2023 - Sep 2023</span>
				</p>
				<ul>
					<li>
						Aim of the project: To enable Amazon to manage Ads
						globally on Bing & Google search engines.
					</li>
					<li>
						Designed and built a feature to free up 80% of database
						space storing low-traffic ads.
					</li>
					<li>
						Developed Lambda function to transfer bulk data among
						sub-systems using AWS cloud services.
					</li>
					<li>
						Technologies: Java, Typescript, DynamoDB Stream, Simple
						Queue Service.
					</li>
				</ul>
			</div>
			<div style={{ marginBottom: '1rem' }}>
				<p>
					<span id="head">Teaching Assistant</span>
					<span>
						| Seattle University's Department of Computer Science |
						Jan 2023 - Jun 2023
					</span>
				</p>
				<ul>
					<li>
						Hosting weekly individual and group tutoring sessions to
						help students with their coursework.
					</li>
					<li>
						Assisting a class of 30 students in algorithm analysis
						and solving strategies.
					</li>
				</ul>
			</div>
			<div style={{ marginBottom: '1rem' }}>
				<p>
					<span id="head">Software Engineering Intern</span>
					<span> | Molloy Moreno, LLC | Jun 2021 - May 2022</span>
				</p>
				<ul>
					<li>
						Aim of the project: To innovate the education technology
						sector by focusing on helping students with special
						needs develop critical life skills.
					</li>
					<li> Designed ERD and deployed backend data models.</li>
					<li>
						Developed custom Cognito authentication system to extend
						support for 4 user types.
					</li>
					<li>
						Restructured Redux store to reduce code complexity and
						increase code coverage to 80%.
					</li>
					<li>
						Technologies: React, Cognito, DynamoDB, AppSync,
						GraphQL.
					</li>
				</ul>
			</div>

			<br /><hr /><br />
			<div id="header">SELECTED PROGRAMMING PROJECTS</div>
			<div>
				<p>
					<span id="head">
						DeSimone Cloud Computing Job Management
					</span>
					<span>
						| Graduate Capstone Project | Sep 2023 – March 2023
					</span>
				</p>
				<ul>
					<li>
						Built a streamlined CI/CD pipeline using GitHub Actions,
						integrated with Azure App Service.
					</li>
					<li>
						Implemented a file picker component integrated with
						Egnyte cloud file management system.
					</li>
					<li>
						Technologies: C#, ASP.NET, Azure App Service, SQL Server
					</li>
				</ul>
			</div>

			<div style={{ marginBottom: '1rem' }}>
				<p>
					<span id="head">St. Francis House Seattle</span>
					<span>
						| Community Volunteer Project | Jan 2023 - Present
					</span>
				</p>
				<ul>
					<li>
						Migrated 230,000 data points from MySQL database to
						Cloud Firestore.
					</li>
					<li>
						Refactored project to utilize React Context and React
						hooks to improve maintainability.
					</li>
					<li>
						Technologies: Typescript, React, NextJS, Jest, Firebase.
					</li>
				</ul>
			</div>

			<div style={{ marginBottom: '1rem' }}>
				<p>
					<span id="head">Computer Science Projects</span>
					<span> | School Project | September 2022 - Present</span>
				</p>
				<ul>
					<li>
						Implemented K-Means clustering algorithm using MPI and a
						Map-Reduce parallelization strategy.
					</li>
					<li>
						Developed a Distributed Hash Table (DHT) with consistent
						hashing technique used for mapping keys to a set of
						nodes in a Chord System
					</li>
				</ul>
			</div>

			<br /><hr /><br />
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
