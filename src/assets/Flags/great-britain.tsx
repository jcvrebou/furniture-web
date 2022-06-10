import React from "react";

const GreatBritainIcon = (props: React.SVGProps<SVGSVGElement>) => {
	const { width = 24, height = 24 } = props;
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_160_4890)">
				<rect
					x="3"
					y="21"
					width="18"
					height="18"
					rx="2"
					transform="rotate(-90 3 21)"
					fill="#3F51B5"
				/>
				<path
					d="M20.1317 22.253L20.4852 22.6066L20.8388 22.253L22.253 20.8388L22.6066 20.4853L22.253 20.1317L14.1213 12.0001L22.2531 3.86826L22.6067 3.51471L22.2531 3.16115L20.8389 1.74694L20.4854 1.39339L20.1318 1.74694L12 9.87873L3.86823 1.74694L3.51468 1.39339L3.16112 1.74694L1.74691 3.16115L1.39336 3.51471L1.74691 3.86826L9.8787 12L1.74703 20.1317L1.39348 20.4853L1.74703 20.8388L3.16125 22.253L3.5148 22.6066L3.86835 22.253L12 14.1214L20.1317 22.253Z"
					fill="#F44336"
					stroke="white"
				/>
				<path
					d="M21 13.5H21.5V13V11V10.5H21L13.5 10.5V3V2.5H13L11 2.5L10.5 2.5V3V10.5L3 10.5H2.5V11L2.5 13L2.5 13.5H3L10.5 13.5V21V21.5H11H13H13.5V21V13.5H21Z"
					fill="#F44336"
					stroke="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_160_4890">
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

export default GreatBritainIcon;
