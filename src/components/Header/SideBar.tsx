import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

const sideBarList = [
	{
		name: 'Category',
		icon: <Inventory2Icon />,
		link: '/admin/category'
	},
	{
		name: 'Product',
		icon: <CategoryIcon />,
		link: '/admin/product'
	},
	{
		name: 'Order',
		icon: <ShoppingCartCheckoutIcon />,
		link: '/admin/order'
	},
	{
		name: 'User',
		icon: <GroupIcon />,
		link: '/admin/user'
	},
];


export default function SideBar() {
	const navigate = useNavigate();

	const handleClick = (_event: React.MouseEvent<HTMLDivElement, MouseEvent>, link: string) => {
		navigate(link);
	}

	const DrawerList = (
		<Box sx={{ width: 250 }} role="presentation">
			<List>
				{sideBarList.map((item) => (
					<ListItem key={item.name} disablePadding>
						<ListItemButton onClick={(e => handleClick(e, item.link))}>
							<ListItemIcon>
								{ item.icon }
							</ListItemIcon>
							<ListItemText primary={item.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider/>
		</Box>
	);

	return (
		<div>
			<Drawer open={true} hideBackdrop sx={{ '& .MuiDrawer-paper': { marginTop: '64px' } }} variant={'persistent'}>
				{DrawerList}
			</Drawer>
		</div>
	);
}