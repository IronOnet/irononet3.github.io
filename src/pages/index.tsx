/* eslint-disable prettier/prettier */
import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import Typed from 'react-typed';


//import LogoFigma from 'Public/assets/tools/figma.svg';
//import LogoGraphql from 'Public/assets/tools/graphql.svg';
import LogoNext from 'Public/assets/tools/nextjs.svg';
import LogoDjango from 'Public/assets/tools/django.svg'; 
import LogoDocker from 'Public/assets/tools/docker.svg';
import LogoGit from 'Public/assets/tools/git.svg'
import LogoGolang from 'Public/assets/tools/golang.svg'; 
import LogoMYSQL from 'Public/assets/tools/mysql.svg'; 
import LogoReact from 'Public/assets/tools/react.svg';
import LogoPython from 'Public/assets/tools/python.svg'; 
import LogoSolidity from 'Public/assets/tools/solidity.svg';
import LogoTensorflow from 'Public/assets/tools/tensorflow.svg'; 
//import LogoRedis from 'Public/assets/tools/redis.svg'; 

const IndexPage = () => {
	const talkAbout = [
		'Backend web development', 
		'Blockchain development', 
		'Machine learning', 
		'Smart contracts', 
		'Web3',
		'Python', 
		'Golang', 
		'APIs', 
		'Solidity',
		'Javascript',  
		'Typescript', 
		'GraphQL', 
		'React.js', 
		'Next.js', 
		'Django', 
		'Django-Restframework', 
		'Flask',
		'Brownie', 
		'Web3.py'
	];

	return (
		<AnimatePage>
			<SeoHead
				title="Freelance software engineer (backend) - Arnaud Wanet"
				description="A Polyglot software engineer with a passion for diesigning and building scalable and secure software. I have more than 5 years of experience
				designing and building various software."
				keywords={[
					'Software Engineer',
					'Arnaud Wanet', 
					'Backend development consulting', 
					'Freelance software engineer', 
					'Back-end', 
					'React', 
					'Golang', 
					'Python', 
					'Software Consulting',
					'Front-End',
					'React',
					'TypeScript',
					'JavaScript',
					'GraphQL',
				
				]}
			/>
			<section id="home" className="h-full">
				<Container>
					<h1 className="headline mt-20 text-3xl md:text-5xl lg:text-6xl">
						Hey, I&apos;m Arnaud Wanet !!
					</h1>
					<p className="my-8 text-lg">
					I&apos;am back-end software engineer, with a deep passion for designing and building 
              		software systems, I have a strong command for multiple programming languages namely 
              		Python, Javascript/Typescript, Go and Solidity. I build amazing web, machine learning and blockchain applications
              		that meet my customer&apos;s demand. feel free to reach out!
              		I&apos;m open to discuss about the following topics with you {' '} 
						<Typed
							loop
							typeSpeed={80}
							backSpeed={20}
							strings={talkAbout}
							smartBackspace
							backDelay={1000}
							loopCount={0}
							showCursor
							cursorChar="|"
						/>
						.
					</p>
					<p>
						You can checkout my profile on{' '}
						<a
							href="https://github.com/jakeherp/portfolio"
							title="Link to LinkedLin profile"
							target="_blank"
							rel="noopener noreferrer"
							className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0"
						>
							LinkedIn
						</a>
						.
					</p>
					<p>
						And my Github repositories on{' '}
						<a
							href="https://github.com/irononet"
							title="Link to Github Profile"
							target="_blank"
							rel="noopener noreferrer"
							className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0"
						>
							Github
						</a>
						.
					</p>
				</Container>
			</section>
			<section id="tools" className="my-40">
				<Container>
					<h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
						Some of my favourite tools
					</h2>

					<div className="flex flex-wrap items-center justify-center max-w-5xl mt-8 mx-auto gap-x-16 gap-y-8">
						<LogoNext className="w-32" aria-label="Next.js" />
						<LogoGolang className="w-32" aria-label="Golang" />
						<LogoPython className="w-12 md:w-36" aria-label="Python" />
						<LogoDjango className="w-12 md:w-60" aria-label="Django" />
						<LogoSolidity className="w-12 md:w-40" aria-label="Solidity" />
						<LogoDocker className="w-28 md:w-36" aria-label="Docker" />
						<LogoGit className="w-32 md:w-36" aria-label="Git" />
						<LogoReact className="w-32" aria-label="React.js" />
						<LogoMYSQL className="w-32 md:w-40" aria-label="Mysql" />
					</div>
				</Container>
			</section>
			<section id="services">
				<Container>
					<h2 className="headline mt-20 text-2xl md:text-4xl lg:text-5xl">
						Services I provide
					</h2>
					<p className="font-bold text-xl md:text-2xl mt-2">
						as a software architect with a passion for creating applications and
						websites that are secure, scalable that meet my client&apos;s requirments
					</p>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Backend Web Development 
					</h3>
					<p className="text-xl mt-4 md:text-xl lg:text-2xl">
						I buid secure and scalable web backends, that scale and are secure 
						in multiple languages. i can also help you maintain legacy code and 
						do code audits. I&apos;m competent in building and designing APIs that comes in many shapes 
						and from from monoliths to microservices and from REST based to Graphql APIs 
						i can cover it all.  
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						I love working with startups and established businesses to find the
						right tech stack, be it a single new feature or a whole rebuild of
						your current product. I can help you find the perfect developers for
						your project and scale up as your business grows.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						When it comes to application development, I&apos;ve seen it all.
						From building highly customised enterprise software stacks on the
						latest open source frameworks to reducing costs and improving user
						experience with cloud-based solutions.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						I offer consulting services for companies and agencies that strive
						to develop scalable and performant web solutions. Deeply knowing my
						customers&apos; needs, I can help them make the right decision when
						it comes to deciding on a software architecture and tech stack.
					</p>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Code Audit
					</h3>
					<p className="text-xl mt-4 md:text-xl lg:text-2xl">
						I make sure your code is accessible, scalable and performs well.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						Code Auditing is the process of auditing software code for
						accessibility, scalability and performance. My expertise includes
						assisting in developing best practices for secure coding, finding
						bugs and defects in a system, recommending best practices for
						scalability and performance.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						Nobody likes software projects to fail. But there are some common
						mistakes that developers make, that can cause software projects to
						underperform or even crash. And these issues aren&apos;t always the
						fault of a developer, but sometimes the code itself is just bad or
						outdated. I&apos;ve been auditing the code of projects for
						compliance and performance for years and enjoy working with
						companies of all sizes to help them scale.
					</p>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Blockchain Development
					</h3>
					<p className="text-xl mt-4 md:text-xl lg:text-2xl">
						I build decentralized applications blockhain apps that are 
						hackproof
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						From DAOs to wallets to fully fledged tokens as well as blockchain-networks 
						i can navigate the entire blockchain eco-system seamlessly. I&apos;m especially 
						passionate about this sector for it represents the future of unrestricted finance 
						and provides great possibility for the advancment  of the unbanked accross the globe. 
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						As a Blockchain and web3 developer , I help my clients create
						the best possible web3 applications for their businesses. Your customers 
						funds are not only secured but the interactions is also seamless
					</p>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Accessibility Audit
					</h3>
					<p className="text-xl mt-4 md:text-xl lg:text-2xl">
						I audit your website or app for accessibility, identify problems,
						and help you fix them.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						Looking for an experienced accessibility auditor? I&apos;ll help you
						identify issues, prioritise them for resolution, provide
						recommendations on how to fix them and keep your site compliant. See
						some examples of my work below.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						I audit existing websites and apps for accessibility, which helps
						determine how they can be improved to meet WCAG best practices. My
						auditing process includes a detailed methodology and reporting. An
						accessibility audit is recommended before launching new products or
						major updates to existing websites and apps.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						As an accessibility auditor, I audit existing websites and apps for
						accessibility. I shed light on why things are inaccessible, and help
						change that. What you&apos;ll gain is a better understanding of how
						users with disabilities interact with your product, what traits make
						for effective interfaces for people with disabilities and insight in
						how to design these interfaces going forward.
					</p>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Machine Learning Engineering 
					</h3>
					<p className="text-xl mt-4 md:text-xl lg:text-2xl">
						I can help you build systems that learn from data. 
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						With machine learning engineering i build and deploy various types 
						of machine learning models that learn from the available data. 
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						I can help you design, develop and deploy modern machine learning 
						systems, using various industry standard tools like Tensorflow, Keras 
						Pytorch, Scikit-learn and Pyspark. 
					</p>
				</Container>
			</section>
		</AnimatePage>
	);
};

export default IndexPage;
