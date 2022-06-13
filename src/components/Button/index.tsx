import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { StyleButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size: "large" | "small";
	styleVariation: "primary" | "secondary" | "outline" | "ghost";
	isDisabled?: boolean;
	icon?: ReactNode;
	iconPosition?: "left" | "centeredLeft" | "right" | "centeredRight";
	children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
	size = "large",
	styleVariation = "primary",
	icon,
	iconPosition,
	children,
	...props
}) => {
	return (
		<StyleButton
			type="button"
			size={size}
			styleVariation={styleVariation}
			iconPosition={iconPosition}
			{...props}
		>
			{(iconPosition === "left" || iconPosition === "centeredLeft") &&
				icon &&
				icon}
			<span>{children}</span>
			{(iconPosition === "right" || iconPosition === "centeredRight") &&
				icon &&
				icon}
		</StyleButton>
	);
};
