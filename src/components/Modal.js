import {Close as CloseIcon} from "@styled-icons/material-rounded";
import * as PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import {Button} from "./Item";

const ModalWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	z-index: 1;
	position: fixed;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const LargeImage = styled.img`
	min-width: 60%;
  max-width: 80%;
  min-height: 80%;
  max-height: 100%;
  margin: auto;
  object-fit: contain;
  user-select: none;
`;

export function MModal(props) {
	return <ModalWrapper onClick={props.onClick}>
		<LargeImage src={props.src}/>
		<Button onClick={props.onClick}>
			<CloseIcon/>
		</Button>
	</ModalWrapper>
}

MModal.propTypes = {
	onClick: PropTypes.func,
	src: PropTypes.any
};
