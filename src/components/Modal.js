import {Close as CloseIcon} from "@styled-icons/material-rounded";
import {KeyboardArrowLeft as LeftIcon} from "@styled-icons/material-rounded";
import {KeyboardArrowRight as RightIcon} from "@styled-icons/material-rounded";
import * as PropTypes from "prop-types";
import React, {useCallback, useEffect, useState} from "react";
import {useSwipeable} from "react-swipeable";
import styled from "styled-components";
import {Button} from "./Button";

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
	touch-action: pinch-zoom;
	cursor: zoom-out;
`;

const ImagesWrapper = styled.div`
  width: 100vw;
	height: 100vh;
	overflow: hidden;
  user-select: none;
  display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: start;
	touch-action: pinch-zoom;
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
	touch-action: pinch-zoom;
`;

const ImageWrapper = styled.div`
	height: 100%;
  min-width: 100%;
  margin: auto;
  object-fit: contain;
  user-select: none;
  background: transparent;
  display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: start;
	touch-action: pinch-zoom;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin: auto;
  object-fit: contain;
  user-select: none;
  touch-action: pinch-zoom;
  cursor: default;
`;

const BUTTON_SIZE_VW = 4;
const BUTTON_SIZE_MIN_PX = 40;
const RoundButton = styled(Button)`
	--size: max(${BUTTON_SIZE_MIN_PX}px, ${BUTTON_SIZE_VW}vw);
	width: var(--size);
  height: var(--size);
  border-radius: calc(var(--size) / 2);
	z-index: 2;
`;

const CloseButton = styled(RoundButton)`
	right: calc(var(--size) / 2);
  top: calc(var(--size) / 2);
`;

const LeftButton = styled(RoundButton)`
 	left: calc(var(--size) / 2);
  top: calc(50vh - var(--size) / 2);
`;

const RightButton = styled(RoundButton)`
 	right: max(${BUTTON_SIZE_MIN_PX / 2}px, ${BUTTON_SIZE_VW / 2}vw);
 	top: calc(50vh - var(--size) / 2);
`;

export function Modal(props) {

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const maxImageIndex = props.images.length;

	const updateCurrentImageIndex = (change) => setCurrentImageIndex(currentImageIndex => {
		if (currentImageIndex + change < 0 || currentImageIndex + change >= maxImageIndex) {
			// out of range
			return currentImageIndex;
		}
		return Math.abs((currentImageIndex + change) % maxImageIndex)
	});

	const decreaseCurrentImageIndex = (e) => {
		updateCurrentImageIndex(-1);
		e.stopPropagation();
	};

	const increaseCurrentImageIndex = (e) => {
		updateCurrentImageIndex(+1);
		e.stopPropagation();
	};

	const updateCarousel = useCallback((event) => {
		if (event.keyCode === 37) {
			// left arrow key
			updateCurrentImageIndex(-1);
		} else if (event.keyCode === 39) {
			// right arrow key
			updateCurrentImageIndex(+1);
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
		<CloseButton>
			<CloseIcon/>
		</CloseButton>
		<LeftButton disabled={currentImageIndex === 0} onClick={(e) => decreaseCurrentImageIndex(e)}>
			<LeftIcon/>
		</LeftButton>
		<RightButton disabled={currentImageIndex === maxImageIndex - 1} onClick={(e) => increaseCurrentImageIndex(e)}>
			<RightIcon/>
		</RightButton>
		<ImagesWrapper {...handlers}>
			<Images style={{transform: `translateX(calc(-100% * ${currentImageIndex}))`}}>
				{props.images.map((image, index) => (
					<ImageWrapper key={index}>
						<Image src={image} onClick={(e) => {
							e.stopPropagation()
						}}/>
					</ImageWrapper>
				))}
			</Images>
		</ImagesWrapper>
	</ModalWrapper>
}

Modal.propTypes = {
	onClick: PropTypes.func,
	src: PropTypes.any
};
