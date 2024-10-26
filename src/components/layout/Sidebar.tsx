import { Box, List, ListItem, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { sidebar } from '../../constants/sidebar'

const Sidebar = () => {
	return (
		<Box
			component={'aside'}
			height={'100vh'}
			position={'sticky'}
			width={'280px'}
			top={0}
			left={0}
			sx={{
				backgroundColor: '#ffffff',
				zIndex: 99,
				padding: '25px 20px',
				display: { xs: 'none', sm: 'block' },
			}}
		>
			<h3>Qarzz.uz</h3>
			<List sx={{ mt: '40px' }}>
				{sidebar.map((item, index) => (
					<ListItem key={index} disablePadding>
						<NavLink className={'navlink'} to={item.path}>
							<item.Icon />

							<ListItemText>{item.title}</ListItemText>
						</NavLink>
					</ListItem>
				))}
			</List>
		</Box>
	)
}

export default Sidebar
