import React from 'react';
import Select, { components } from 'react-select';

const CustomSelect = ({ type, options, value, onChange }) => {
	const Option = props => {
		return (
			<>
				<components.Option {...props}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-evenly'
						}}
					>
						{props.data.icon({
							width: '20px',
							height: '20px',
							color: '#ABA7D9'
						})}
						{props.children}
					</div>
				</components.Option>
			</>
		);
	};

	const SingleValue = props => {
		let selectedData = props.getValue()[0];
		return (
			<>
				<components.SingleValue {...props}>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<div>
							{selectedData.icon({
								width: '60px',
								height: '60px',
								color: '#ABA7D9'
							})}
						</div>

						<div style={{ marginRight: '20px' }}>
							<div style={{ font: '600 12px/18px Poppins', color: '#9896B0' }}>
								{type}
							</div>
							<div style={{ font: '600 20px/30px Poppins', color: '#9896B0' }}>
								{' '}
								{selectedData.label}
							</div>
						</div>
					</div>
				</components.SingleValue>
			</>
		);
	};
	return (
		<Select
			value={value}
			options={options}
			onChange={onChange}
			styles={customStyles}
			components={{ Option: Option, SingleValue: SingleValue }}
			isClearable={false}
			isSearchable={false}
		/>
	);
};

export default CustomSelect;

const customStyles = {
	valueContainer: (provided, state) => ({
		...provided
		// width: ''
	}),
	indicatorSeparator: () => ({
		display: 'none'
	}),
	control: (provided, state) => ({
		...provided,
		border: 'none',
		backgroundColor: 'none'
	})
};
