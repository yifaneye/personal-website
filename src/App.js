import './App.css';
import React from "react";

function App() {
	const res = {
		totalItems: 3,
		items: [
			{
				title: 'Yifan Ai',
				subtitle: 'Web developer and software engineer 👨🏻‍💻',
				description: 'Yifan Ai is passionate about developing things and making positive impacts on society.',
				url: 'https://u.yifanai.com/yifanai',
				image: 'https://resume-1.s3.amazonaws.com/media/images/m5.jpg',
			},
			{
				title: 'Checkboxes Library',
				description: 'Library of customizable checkboxes ✅',
				desc: 'Checkboxes with customizable size, border radius, background color, tick color, and animation time. 👉 npm i checkboxes',
				url: 'https://u.yifanai.com/cbs',
				image: 'https://yifanai.s3-ap-southeast-2.amazonaws.com/checkboxes/checkboxes.gif'
			},
			{
				title: 'Grilled Grids',
				subtitle: 'Responsive grid system 🏁',
				description: 'Grid with any of 1 to 12 columns 👉 npm i grilled',
				url: 'https://u.yifanai.com/gg',
				image: 'https://https://yifanai.s3-ap-southeast-2.amazonaws.com/grilled/grilled.gif',
			},
		]
	};

	return (
		<>
			{res.items.map((item, index) => (
				<div>{item.title}</div>
			))}
		</>
	);
}

export default App;
