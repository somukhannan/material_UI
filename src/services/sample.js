import context from '../core/context';

const productChecked = (productsList, product) =>
	productsList.map((data) =>
		(product.Id !== data.Id
			? {
				...data,
				isChecked: false,
			}
			: {
				...data,
				isChecked: true,
			}));

const selectedProduct = () =>
	context.state.productsList.filter((data) => data.isChecked !== false);

const getList = () =>
	context.state.SelectedList;

const SampleService = {
	productChecked,
	selectedProduct,
	getList,
};

export default SampleService;
