import React from "react";
import colors from "../../styles/colors";

const CartIcon = (props: React.SVGProps<SVGSVGElement>) => {
	const { width = 24, height = 24, color = colors.black } = props;
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M0 2H2.5C2.81476 2 3.11115 2.14819 3.3 2.4L4.5 4H19.5604C21.4535 4 22.8734 5.73198 22.5021 7.58835L21.4629 12.7845C21.089 14.6542 19.4473 16 17.5406 16H6C5.44772 16 5 16.4477 5 17C5 17.5523 5.44772 18 6 18H21V20H19C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20H11C11 21.1046 10.1046 22 9 22C7.89543 22 7 21.1046 7 20H6C4.34315 20 3 18.6569 3 17C3 15.4575 4.16407 14.187 5.66163 14.0189L3.09328 5.45771L2 4H0V2ZM5.34403 6L7.74403 14H17.5406C18.4939 14 19.3148 13.3271 19.5017 12.3922L20.541 7.19612C20.6647 6.57732 20.1914 6 19.5604 6H5.34403Z"
				fill={color}
			/>
		</svg>
	);
};

export default CartIcon;
