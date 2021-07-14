const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const setFontSize = ({ data }) => ({
	fontSize: data,
});

const selectInput = ({ data }) => ({
	text: data,
});

const actions = {
	increaseCount,
	setFontSize,
	selectInput,
};

export default actions;
