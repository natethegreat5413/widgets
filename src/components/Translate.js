import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
	{
		label: 'Afrikaans',
		value: 'af'
	},
	{
		label: 'Arabic',
		value: 'ar'
	},
	{
		label: 'Hindi',
		value: 'hi'
	},
	{
		label: 'Danish',
		value: 'da'
	},

	{
		label: 'Bulgarian',
		value: 'bg'
	},
	{
		label: 'Czech',
		value: 'cs'
	},
	{
		label: 'Italian',
		value: 'it'
	},
	{
		label: 'Hebrew',
		value: 'he or iw'
	},
	{
		label: 'Gujarati',
		value: 'gu'
	},
	{
		label: 'Zulu',
		value: 'zu'
	},
	{
		label: 'Greek',
		value: 'el'
	},
	{
		label: 'Icelandic',
		value: 'is'
	},
	{
		label: 'Haitian Creole',
		value: 'ht'
	},
	{
		label: 'Dutch',
		value: 'nl'
	},
	{
		label: 'Corsican',
		value: 'co'
	},
	{
		label: 'Basque',
		value: 'eu'
	},
	{
		label: 'Belarusian',
		value: 'be'
	},
	{
		label: 'Amharic',
		value: 'am'
	},
	{
		label: 'Albanian',
		value: 'sq'
	}
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState('');
	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Text</label>
					<input value={text} onChange={(e) => setText(e.target.value)} />
				</div>
			</div>
			<br />
			<Dropdown
				options={options}
				onSelectedChange={setLanguage}
				selected={language}
				label="Select a Language"
			/>
			<hr />
			<h3 className="ui header">Output</h3>

			<Convert language={language} text={text} />
		</div>
	);
};

export default Translate;
