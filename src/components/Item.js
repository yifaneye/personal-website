import * as PropTypes from "prop-types";
import React, {useState} from "react";
import styled, {css} from 'styled-components';
import {ExpandMore as MoreIcon} from '@styled-icons/material-rounded/ExpandMore';
import {ExpandLess as LessIcon} from '@styled-icons/material-rounded/ExpandLess';
import {MModal} from "./Modal";

const Wrapper = styled.div`
  height: 400px;
  max-height: 400px;
  min-height: 400px;
  padding: 40px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
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
`;

export const Button = styled.div`
	width: 40px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  background: #eee;
  color: #bbb;
  cursor: pointer;
`;

export function Item(props) {

	const {title, subtitle, description, website, image} = props.item;
	const [isShowingMore, setIsShowingMore] = useState(false);
	const [isShowingModal, setIsShowingModal] = useState(false);

	function toggleShowMore() {
		setIsShowingMore(!isShowingMore);
	}

	function toggleShowModal() {
		setIsShowingModal(!isShowingModal);
	}

	return (
		<>
			<Wrapper href={website}>
				<Link href={website} target="_blank" rel="noopener noreferrer">
					<Title>{title}</Title>
				</Link>
				<Subtitle>{subtitle}</Subtitle>
				{isShowingMore && <Description>{description}</Description>}
				{isShowingMore && <Website href={website} target="_blank" rel="noopener noreferrer">{website}</Website>}
				<Image src={image} onClick={toggleShowModal}/>
				<Button onClick={toggleShowMore}>
					{isShowingMore ? <LessIcon/> : <MoreIcon/>}
				</Button>
			</Wrapper>
			{isShowingModal && <MModal onClick={toggleShowModal} src={image}/>}
		</>
	)
}

Item.propTypes = {item: PropTypes.any};
