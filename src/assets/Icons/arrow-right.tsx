import React from "react";
import colors from "../../styles/colors";

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => {
	const { width = 24, height = 24, color = colors.black } = props;
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 28 29"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_d_93_3995)">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M20.5858 11L14.7929 5.20712L16.2071 3.79291L23.7071 11.2929C24.0976 11.6834 24.0976 12.3166 23.7071 12.7071L16.2071 20.2071L14.7929 18.7929L20.5858 13H4V11H20.5858Z"
					fill={color}
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_93_3995"
					x="-2"
					y="0"
					width="32"
					height="32"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_93_3995"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_93_3995"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default ArrowRightIcon;
