import * as PropTypes from "prop-types";
import React from "react";
import styled, {css} from 'styled-components';
import {MoreHoriz} from '@styled-icons/material/MoreHoriz';

const Wrapper = styled.div`
  height: 400px;
  padding: 10%;
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
  font-size: 15px;
  margin: 0 0 10px;
  color: #666;
`;

const Image = styled.img`
  width: calc(100% + 25%);
  height: 100%;
  object-fit: cover;
  margin: 20px -12.5% 0;
`;

const Button = styled.div`
	width: 40px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  background: #eee;
  color: #aaa;
`;

export function Item(props) {

	const {title, subtitle, description, website, image} = props.item;
	return (
		<Wrapper>
			<Button><MoreHoriz/></Button>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
			<Image src={image}/>
		</Wrapper>
	)
}

Item.propTypes = {item: PropTypes.any};
