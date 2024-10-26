import Box from '@mui/material/Box'
import { NavLink } from 'react-router-dom'
import { sidebar } from '../../constants/sidebar'

const BottomMenu = () => {
	return (
		<Box
			sx={{
				width: '100%',
				backgroundColor: '#ffffff',
				padding: '10px 20px',
				zIndex: 111,
			}}
			position={'fixed'}
			bottom={0}
			left={0}
			display={{ xs: 'block', sm: 'none' }}
		>
			<nav className='bottom-menu'>
				{sidebar.map((item, index) => (
					<NavLink
						to={item.path}
						key={index}
						className={({ isActive }) =>
							(isActive ? 'bottom-menu-active' : '') + ' bottom-menu-link'
						}
					>
						<item.Icon />
						<span>{item.title}</span>
					</NavLink>
				))}
			</nav>
		</Box>
	)
}
export default BottomMenu
