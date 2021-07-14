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

const actions = {
	increaseCount,
	setFontSize,
	selectInput,
	setSwitch,
};

export default actions;
