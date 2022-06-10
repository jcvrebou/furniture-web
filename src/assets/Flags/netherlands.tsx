import React from "react";

const NetherlandsIcon = (props: React.SVGProps<SVGSVGElement>) => {
	const { width = 24, height = 24 } = props;
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="3" y="3" width="18" height="6" fill="#F44336" />
			<rect x="3" y="9" width="18" height="6" fill="#F5F5F5" />
			<rect x="3" y="15" width="18" height="6" fill="#3F51B5" />
		</svg>
	);
};

export default NetherlandsIcon;
