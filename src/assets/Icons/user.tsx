import React from "react";
import colors from "../../styles/colors";

const UserIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
				d="M17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7ZM15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z"
				fill={color}
			/>
			<path
				d="M4.5 22C5.5 22 5.5 22.0004 5.5 22.0008L5.50011 21.9922C5.50026 21.9822 5.5006 21.9651 5.50134 21.9414C5.50283 21.8939 5.50594 21.8198 5.51241 21.7231C5.52539 21.5292 5.55177 21.2463 5.6052 20.9044C5.71283 20.2155 5.92621 19.3135 6.34296 18.4244C6.75859 17.5377 7.36344 16.6908 8.24359 16.065C9.1142 15.4459 10.3138 15 12 15C13.6862 15 14.8858 15.4459 15.7564 16.065C16.6366 16.6908 17.2414 17.5377 17.657 18.4244C18.0738 19.3135 18.2872 20.2155 18.3948 20.9044C18.4482 21.2463 18.4746 21.5292 18.4876 21.7231C18.4941 21.8198 18.4972 21.8939 18.4987 21.9414C18.4994 21.9651 18.4997 21.9822 18.4999 21.9922L18.5 22.0008C18.5 22.0004 18.5 22 19.5 22C20.5 22 20.5 21.9995 20.5 21.999L20.5 21.9978L20.5 21.9949L20.4999 21.9868L20.4997 21.9619C20.4993 21.9416 20.4988 21.9138 20.4977 21.8789C20.4955 21.8093 20.4913 21.7114 20.4831 21.5894C20.4668 21.3458 20.4346 21.0037 20.3708 20.5956C20.2441 19.7845 19.9887 18.6865 19.468 17.5756C18.9461 16.4623 18.1447 15.3092 16.9155 14.435C15.6767 13.5541 14.0638 13 12 13C9.93623 13 8.3233 13.5541 7.08454 14.435C5.85531 15.3092 5.05391 16.4623 4.53204 17.5756C4.01129 18.6865 3.75592 19.7845 3.62918 20.5956C3.56541 21.0037 3.5332 21.3458 3.51688 21.5894C3.50871 21.7114 3.5045 21.8093 3.50232 21.8789C3.50123 21.9138 3.50065 21.9416 3.50034 21.9619L3.50006 21.9868L3.50001 21.9949L3.5 21.9978V21.999C3.5 21.9995 3.5 22 4.5 22Z"
				fill={color}
			/>
		</svg>
	);
};

export default UserIcon;
