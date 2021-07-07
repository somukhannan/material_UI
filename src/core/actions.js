const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const setFontSize = ({ data }) => ({
	fontSize: data,
});

const actions = {
	increaseCount,
	setFontSize,
};

export default actions;
