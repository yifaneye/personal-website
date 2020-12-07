import * as PropTypes from "prop-types";
import React, {useState} from "react";
import {Modal} from "./Modal";
import {Card} from "./Card";

export function Item(props) {

	const [isShowingModal, setIsShowingModal] = useState(false);

	function toggleShowModal() {
		setIsShowingModal(!isShowingModal);
	}

	return (
		<>
			<Card item={props.item} onClickModal={toggleShowModal}/>
			{isShowingModal && <Modal onClick={toggleShowModal} src={props.item.image}/>}
		</>
	)
}

Item.propTypes = {item: PropTypes.any};
