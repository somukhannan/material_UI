import { React } from 'react';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import context from '../core/context';

const Product = (product) => {
	// eslint-disable-next-line no-unused-vars
	const { Id, Name, Price } = product;

	return	<ListItem>
		<ListItemIcon>
			<Checkbox
				key={ Id }
				onClick={
					() => context.actions.setChecked(product)
				}
			/>
		</ListItemIcon>
		<ListItemText>{ Name }</ListItemText>
	</ListItem>;
};

const ProductList = () =>
	<List>
		{ context.config.productsDetails.map(Product) }
	</List>;

export default ProductList;
