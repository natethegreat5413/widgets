import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
// import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

// const items = [
// 	{
// 		title: 'What is React?',
// 		content: 'React is a front end javascript framework'
// 	},
// 	{
// 		title: 'Why use React?',
// 		content: 'React is a favorite JS library among engineers'
// 	},
// 	{
// 		title: 'How do you use React?',
// 		content: 'You use it by creating components'
// 	}
// ];

// const options = [
// 	{
// 		label: 'A Shade of Blue',
// 		value: 'blue'
// 	},
// 	{
// 		label: 'The Color Green',
// 		value: 'green'
// 	},
// 	{
// 		label: 'The Color Red',
// 		value: 'red'
// 	}
// ];

const App = () => {
	// const [selected, setSelected] = useState(options[0]);
	// const [showDropdown, setShowDropdown] = useState(true);
	return (
		<div className="App">
			{/* <Accordion items={items} /> */}
			{/* <Search /> */}
			{/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
			{showDropdown ? (
				<Dropdown onSelectedChange={setSelected} selected={selected} options={options} />
			) : null} */}
			<Translate />
		</div>
	);
};

export default App;
