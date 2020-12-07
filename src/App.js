import React from "react";
import 'grilled';
import styled from 'styled-components';

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
const Item = styled.div`
  height: 400px;
  padding: 20px;
  background: white;
  border-radius: 10px;
`;


function App() {
	const res = {
		totalItems: 3,
		items: [
			{
				title: 'Yifan Ai',
				subtitle: 'Web developer and software engineer‍',
				description: 'Yifan Ai is passionate about developing things and making positive impacts on society.',
				url: 'https://u.yifanai.com/yifanai',
				image: 'https://resume-1.s3.amazonaws.com/media/images/m5.jpg',
			},
			{
				title: 'Checkboxes Library',
				subtitle: 'Library of customizable checkboxes',
				description: 'Checkboxes with customizable size, border radius, background color, tick color, and animation time. (npm i checkboxes)',
				url: 'https://u.yifanai.com/cbs',
				image: 'https://yifanai.s3-ap-southeast-2.amazonaws.com/checkboxes/checkboxes.gif'
			},
			{
				title: 'Grilled Grids',
				subtitle: 'Responsive grid system 🏁',
				description: 'Grid with any of 1 to 12 columns (npm i grilled)',
				url: 'https://u.yifanai.com/gg',
				image: 'https://https://yifanai.s3-ap-southeast-2.amazonaws.com/grilled/grilled.gif',
			},
		]
	};

	return (
		<Page>
			<ItemsWrapper className='grid12'>
				{res.items.map((item, index) => (
					<ItemWrapper className='xs12 sm6 g4' key={index}>
						<Item>
							<h2>{item.title}</h2>
						</Item>
					</ItemWrapper>
				))}
			</ItemsWrapper>
		</Page>
	);
}

export default App;
