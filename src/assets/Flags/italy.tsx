import React from 'react';

const ItalyIcon = (props: React.SVGProps<SVGSVGElement>) => {
	const {width=24, height=24} = props;
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_160_4818)">
				<path d="M9 21L9 3L15 3L15 21H9Z" fill="#F5F5F5" />
				<path d="M3 21L3 3L9 3L9 21H3Z" fill="#4CAF50" />
				<path d="M15 21L15 3L21 3L21 21H15Z" fill="#F44336" />
			</g>
			<defs>
				<clipPath id="clip0_160_4818">
					<rect
						x="3"
						y="21"
						width="18"
						height="18"
						rx="2"
						transform="rotate(-90 3 21)"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default ItalyIcon;