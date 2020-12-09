import {Close as CloseIcon} from "@styled-icons/material-rounded";
import * as PropTypes from "prop-types";
import React, {useCallback, useEffect, useState} from "react";
import {useSwipeable} from "react-swipeable";
import styled from "styled-components";
import {Button} from "./Button";
import {ButtonWrapper} from "./ButtonWrapper";

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
  min-width: 100%;
  user-select: none;
  display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: start;
	transition-duration: 0.5s;
	transition-property: transform;
	transition-timing-function: ease-in-out;
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

const CLOSE_BUTTON_SIZE = 4;
const CLOSE_BUTTON_SIZE_MIN = 40;
const CloseButton = styled(Button)`
	width: max(${CLOSE_BUTTON_SIZE_MIN}px, ${CLOSE_BUTTON_SIZE}vw);
  height: max(${CLOSE_BUTTON_SIZE_MIN}px, ${CLOSE_BUTTON_SIZE}vw);
  border-radius: max(${CLOSE_BUTTON_SIZE_MIN / 2}px, ${CLOSE_BUTTON_SIZE / 2}vw);
  right: max(${CLOSE_BUTTON_SIZE_MIN / 2}px, ${CLOSE_BUTTON_SIZE / 2}vw);
  bottom: -max(${CLOSE_BUTTON_SIZE_MIN * 1.5}px, ${CLOSE_BUTTON_SIZE * 1.5}vw);
	z-index: 2;
`;

export function Modal(props) {

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const maxImageIndex = props.images.length;

	const updateCurrentImageIndex = (change) => setCurrentImageIndex(currentImageIndex => Math.abs((currentImageIndex + change) % maxImageIndex));

	const updateCarousel = useCallback((event) => {
		if (event.keyCode === 37) {
			// left arrow key
			updateCurrentImageIndex(+1);
		} else if (event.keyCode === 39) {
			// right arrow key
			updateCurrentImageIndex(-1);
		}
	}, [currentImageIndex]);

	useEffect(() => {
		document.addEventListener("keydown", updateCarousel, false);

		return () => {
			document.removeEventListener("keydown", updateCarousel, false);
		};
	});

	const handlers = useSwipeable({
		onSwipedLeft: () => updateCurrentImageIndex(+1),
		onSwipedRight: () => updateCurrentImageIndex(-1),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true
	});

	return <ModalWrapper onClick={props.onClick}>
		<ButtonWrapper>
			<CloseButton onClick={props.onClick}>
				<CloseIcon/>
			</CloseButton>
		</ButtonWrapper>
		<ImagesWrapper {...handlers}>
			<Images style={{transform: `translateX(calc(-100% * ${currentImageIndex}))`}}>
				{props.images.map((image, index) => (
					<Image src={image} key={index}/>
				))}
			</Images>
		</ImagesWrapper>
	</ModalWrapper>
}

Modal.propTypes = {
	onClick: PropTypes.func,
	src: PropTypes.any
};
