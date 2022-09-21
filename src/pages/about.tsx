import { IEducation, IJob, IPodcast } from '@types';

import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import { mapEducation } from 'Utils/mappings/mapEducation';
import { mapJobs } from 'Utils/mappings/mapJobs';
import { mapPodcasts } from 'Utils/mappings/mapPodcasts';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { Education } from 'Organisms/Education';
import { Icon } from 'Atoms/Icon';
import { PodcastList } from 'Molecules/PodcastList';
import { SeoHead } from 'Atoms/SeoHead';
import { WorkExperience } from 'Organisms/WorkExperience';

interface IProps {
	podcasts: IPodcast[];
	jobs: IJob[];
	education: IEducation[];
}

const AboutPage: NextPage<IProps> = ({ podcasts, jobs, education }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="About Jacob Herper, a Senior Software Engineer and Consultant in the UK"
				description="As a passionate front-end software developer, I create amazing websites and web apps to make the internet a better place."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
					Hey, I&apos;m Arnaud Wanet
				</h1>
				<h2 className="font-bold text-xl md:text-2xl mt-2">
					Senior Software Engineer from the UK
				</h2>
				<p className="mt-8">
					As a passionate front-end developer, I create amazing websites and web
					apps to make the internet a better place. I am an advocate for web
					performance and accessibility as well as a JAMstack enthusiast with
					experience in serverless technologies.
				</p>
				<p className="my-4">
					I&po;m a passionate software engineer who build scalable and secure
					backend systems, blockchain applications. I command may programming
					languages my primary ones being python, go, solidity and javascript. I
					can also build frontend application when the need requires it but i
					focus mainly on backend systems.
				</p>
				<p>
					I&apo;m 30 years old and I&apo;ve been writing code since 2014. the
					types of system I usualy build range from REST APIs, GraphQL APIs,
					blockhains and smart contracts and decentralized apps. I can go from
					architecting a system, planing, and deliver it to end users.
				</p>
				<h2 className="headline mt-12 mb-4 text-4xl">Podcasts I enjoy</h2>

				<PodcastList podcasts={podcasts} />

				<h2 className="headline mt-12 mb-4 text-4xl">Experience</h2>

				<WorkExperience jobs={jobs} />

				<h2 className="headline mt-12 mb-4 text-4xl">Education</h2>
				<p className="mb-6">
					Although I have two degrees one in Computer Engineering and the other
					in Law i have learned much of my craft through practice, self study
					and the many experiences of past project.
				</p>

				<Education education={education} />

				<div className="flex justify-center mt-8">
					<Button
						href="/cv-2022.pdf"
						download={true}
						className="group flex gap-2 whitespace-nowrap"
					>
						<div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
							<Icon icon="DOWNLOAD" />
						</div>
						<div className="block headline group-hover:text-off-white">
							Download my CV
						</div>
					</Button>
				</div>
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query AboutPageQuery {
				podcasts(orderBy: position_ASC) {
					id
					name
					url
					logo {
						url
					}
				}
				jobs(orderBy: fromDate_DESC) {
					id
					jobTitle
					fromDate
					toDate
					description {
						raw
					}
					company {
						name
						url
						logo {
							url
						}
					}
					skills {
						skill
					}
				}
				educations(orderBy: date_DESC) {
					id
					course
					date
					courseContents {
						skill
					}
					institute {
						name
						url
						logo {
							url
						}
					}
				}
			}
		`,
	});

	return {
		props: {
			podcasts: mapPodcasts(data.podcasts),
			education: mapEducation(data.educations),
			jobs: mapJobs(data.jobs),
		},
	};
}

export default AboutPage;
