import React, {useEffect, useState} from "react";
import 'grilled';
import styled from 'styled-components';
import {Item} from "./components/Item";

const Page = styled.div`
  background: #eee;
`;
const ItemsWrapper = styled.section`
	margin: 0 auto;
  max-width: 1440px;
`;
const ItemWrapper = styled.div`
  margin: 20px;
`;

function App() {

	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('/items.json')
			.then(response => response.json())
			.then(data => setItems(data));
		return () => {
			setItems([]);
		}
	}, []);

	return (
		<Page>
			<ItemsWrapper className='grid12'>
				{items.map((item, index) => (
					<ItemWrapper className={item.size} key={index}>
						<Item item={item}/>
					</ItemWrapper>
				))}
			</ItemsWrapper>
		</Page>
	);
}

export default App;
