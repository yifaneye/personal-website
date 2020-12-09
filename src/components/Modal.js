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
	background-color: rgba(0, 0, 0, 0.9);
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	cursor: zoom-out;
	touch-action: pan-x pinch-zoom;
`;

const ImagesWrapper = styled.div`
  width: 100vw;
	height: 100vh;
	overflow: auto;
  user-select: none;
  display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: start;
`;

const Images = styled.div`
  height: 100%;
  user-select: none;
  display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: start;
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

const CLOSE_BUTTON_SIZE = 4;
const CLOSE_BUTTON_SIZE_MIN = 40;
export const Button = styled.div`
	width: max(${CLOSE_BUTTON_SIZE_MIN}px, ${CLOSE_BUTTON_SIZE}vw);
  height: max(${CLOSE_BUTTON_SIZE_MIN}px, ${CLOSE_BUTTON_SIZE}vw);
  border-radius: max(${CLOSE_BUTTON_SIZE_MIN / 2}px, ${CLOSE_BUTTON_SIZE / 2}vw);
  right: max(${CLOSE_BUTTON_SIZE_MIN / 2}px, ${CLOSE_BUTTON_SIZE / 2}vw);
  bottom: -max(${CLOSE_BUTTON_SIZE_MIN * 1.5}px, ${CLOSE_BUTTON_SIZE * 1.5}vw);
  position: absolute;
  background: #eee;
  color: #bbb;
  cursor: pointer;
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 2;
`;

export function Modal(props) {
	return <ModalWrapper onClick={props.onClick}>
		<ButtonWrapper>
			<Button onClick={props.onClick}>
				<CloseIcon/>
			</Button>
		</ButtonWrapper>
		<ImagesWrapper>
			<Images style={{transform: `translateX(-100%)`}}>
				<Image src={props.src}/>
				<Image src='https://yifanai.s3-ap-southeast-2.amazonaws.com/grilled/grilled.jpg'/>
			</Images>
		</ImagesWrapper>
	</ModalWrapper>
}

Modal.propTypes = {
	onClick: PropTypes.func,
	src: PropTypes.any
};
