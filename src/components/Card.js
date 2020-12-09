import {ExpandLess as LessIcon, ExpandMore as MoreIcon} from "@styled-icons/material-rounded";
import * as PropTypes from "prop-types";
import React, {useState} from "react";
import styled, {css} from "styled-components";
import {Button} from "./Button";
import {ButtonWrapper} from "./ButtonWrapper";

const Wrapper = styled.div`
  height: 400px;
  max-height: 400px;
  min-height: 400px;
  padding: 40px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(127, 127, 127, 0.1) !important;
`;

const Lines = css`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
`;

const Link = styled.a`
	text-decoration: none;
`;

const Title = styled.h2`
	${Lines};
	-webkit-line-clamp: 1;
	font-size: 30px;
  margin: 0 0 10px;
  color: #000;
`;

const Subtitle = styled.h3`
  ${Lines};
  -webkit-line-clamp: 2;
  font-size: 20px;
  margin: 0 0 10px;
  color: #666;
`;

const Description = styled.h4`
  font-size: 15px;
  margin: 0 0 10px;
  color: #333;
`;

const Website = styled.a`
  font-size: 15px;
  margin: 0 0 10px;
  color: #333;
`;

const Image = styled.img`
  width: calc(100% + 40px * 2);
  height: 100%;
  object-fit: cover;
  margin: 20px -40px 0;
  user-select: none;
  cursor: zoom-in;
`;

const TOGGLE_BUTTON_SIZE = 40;
const ToggleButton = styled(Button)`
	width: ${TOGGLE_BUTTON_SIZE}px;
  height: ${TOGGLE_BUTTON_SIZE}px;
  border-radius: ${TOGGLE_BUTTON_SIZE / 2}px;
  right: calc(50% - ${TOGGLE_BUTTON_SIZE / 2}px);
  bottom: -${TOGGLE_BUTTON_SIZE}px;
`;

export function Card(props) {

	const {title, subtitle, description, website, image} = props.item;

	const [isShowingMore, setIsShowingMore] = useState(false);

	function toggleShowMore() {
		setIsShowingMore(!isShowingMore);
	}

	return <Wrapper href={website}>
		<Link href={website} target="_blank" rel="noopener noreferrer">
			<Title>{title}</Title>
		</Link>
		<Subtitle>{subtitle}</Subtitle>
		{isShowingMore && <Description>{description}</Description>}
		{isShowingMore && <Website href={website} target="_blank" rel="noopener noreferrer">{website}</Website>}
		<ButtonWrapper>
			<ToggleButton onClick={toggleShowMore}>
				{isShowingMore ? <LessIcon/> : <MoreIcon/>}
			</ToggleButton>
		</ButtonWrapper>
		<Image src={image} onClick={props.onClickModal}/>
	</Wrapper>
}

Card.propTypes = {
	item: PropTypes.any,
	showingMore: PropTypes.bool,
	onClickMore: PropTypes.func,
	onClickModal: PropTypes.func
};
