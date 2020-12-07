import {Close as CloseIcon} from "@styled-icons/material-rounded";
import * as PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	z-index: 1;
	position: fixed;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const Image = styled.img`
	min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  margin: auto;
  object-fit: contain;
  user-select: none;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
	position: relative;
`;

export const Button = styled.div`
	width: 4vw;
  height: 4vw;
  border-radius: 2vw;
  right: 2vw;
  bottom: -6vw;
  position: absolute;
  background: #eee;
  color: #bbb;
  cursor: pointer;
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export function Modal(props) {
	return <ModalWrapper onClick={props.onClick}>
		<ButtonWrapper>
			<Button onClick={props.onClick}>
				<CloseIcon/>
			</Button>
		</ButtonWrapper>
		<Image src={props.src}/>
	</ModalWrapper>
}

Modal.propTypes = {
	onClick: PropTypes.func,
	src: PropTypes.any
};
