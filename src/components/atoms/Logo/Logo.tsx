import Arnaud from './arnaud-wanet.png';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
//import styled from 'styled-components';

// TODO: Add a Styled compoenent that wraps
// the image and adds a border radius to the
// Image component

// const ImageWrap = styled.span`
// 	margin: 32px auto;
// 	box-sizing: content-box;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// 	& > div{
// 		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// 		border-radius: 5px;
// 	}`;

const Logo = () => {
	return (
		<Link href="/" passHref>
			<motion.a
				className="group relative transition whitespace-nowrap hover:transition duration-300 text-2xl font-bold flex gap-4 items-center"
				animate={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -10 }}
			>
				<div className="image-wrapper">
					<Image
						src={Arnaud}
						width={48}
						height={48}
						quality={100}
						alt="Vectorised image of Arnaud Wanet"
						className="w-12 h-12"
					/>
				</div>
				<span className="transition duration-300 opacity-100 group-hover:opacity-0">
					@ironOnet
				</span>
				<span className="absolute transition duration-300 left-16 opacity-0 group-hover:opacity-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-start to-blue-stop dark:from-purple-start dark:to-purple-stop">
					Arnaud Wanet
				</span>
			</motion.a>
		</Link>
	);
};

export { Logo };
