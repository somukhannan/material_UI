import SampleService from '../services/sample';

const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const setFontSize = ({ data }) => ({
	fontSize: data,
});

const selectInput = ({ data }) => ({
	text: data,
});

const setSwitch = ({ data }) => ({
	switch: data,
});

const setChecked = ({ state, data }) => ({
	productsList: SampleService.productChecked(state.productsList, data),
});

const moveProducts = () => ({
	selectedList: SampleService.selectedProduct(),
});

const actions = {
	increaseCount,
	setFontSize,
	selectInput,
	setSwitch,
	setChecked,
	moveProducts,
};

export default actions;
