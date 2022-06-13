import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
	size: "large" | "small";
	styleVariation: "primary" | "secondary" | "outline" | "ghost";
	iconPosition?: "left" | "centeredLeft" | "right" | "centeredRight";
}

export const StyleButton = styled.button<ButtonProps>`
	display: flex;
	border: ${({ size }) => (size === "large" ? "2px" : "1px")} solid transparent;
	min-width: ${({ size }) => (size === "large" ? "343px" : "auto")};
	justify-content: center;
	align-items: center;
	gap: 5px;
	padding: ${({ size }) => (size === "large" ? "20px" : "7.5px")} 16px;
	background: ${({ styleVariation }) =>
		styleVariation === "primary"
			? "#FEE440"
			: styleVariation === "secondary"
			? "#F5F5F5"
			: "transparent"};
	border-radius: ${({ size }) => (size === "large" ? "8px" : "4px")};
	border-color: ${({ styleVariation }) =>
		styleVariation === "outline" && "#212121"};

	font-family: "Poppins", sans-serif;
	font-weight: 500;
	font-size: ${({ size }) => (size === "large" ? "16px" : "14px")};
	line-height: ${({ size }) => (size === "large" ? "24px" : "21px")};
	color: #212121;
	cursor: pointer;
	
	svg {
		/* font-size: ${({ size }) => (size === "large" ? "16px" : "14px")}; */
		justify-self: flex-end;
		align-self: flex-end;
		
	}

	&:disabled {
		background: ${({ styleVariation }) =>
			styleVariation === "primary" || styleVariation === "secondary"
				? "#E0E0E0"
				: "transparent"};
		color: #9e9e9e;
		border-color: ${({ styleVariation }) =>
			styleVariation === "outline" && "#9E9E9E"};
	}
`;
