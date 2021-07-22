import { React } from 'react';
import context from '../core/context';

const SelectedProductList = () => {
	const { selectedList } = context.state;

	return	selectedList.map((product) => {
		const { Id, Name, Price } = product;

		return <div key={ Id }>
			<span>{Name}</span>
			<span>{Price}</span>
		</div>;
	});
};

export default SelectedProductList;
