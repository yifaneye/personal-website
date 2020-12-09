import * as PropTypes from "prop-types";
import React, {useCallback, useEffect, useState} from "react";
import {Modal} from "./Modal";
import {Card} from "./Card";

export function Item(props) {

	const [isShowingModal, setIsShowingModal] = useState(false);

	function toggleShowModal() {
		setIsShowingModal(!isShowingModal);
	}

	const escapeModal = useCallback((event) => {
		if (event.keyCode === 27) {
			setIsShowingModal(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener("keydown", escapeModal, false);

		return () => {
			document.removeEventListener("keydown", escapeModal, false);
		};
	});

	return (
		<>
			<Card item={props.item} onClickModal={toggleShowModal}/>
			{isShowingModal && <Modal onClick={toggleShowModal} images={props.item.images}/>}
		</>
	)
}

Item.propTypes = {item: PropTypes.any};
