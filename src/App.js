import React from "react";
import 'grilled';
import styled from 'styled-components';
import {Item} from "./components/Item";
const items = require("./assets/items.json");

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
