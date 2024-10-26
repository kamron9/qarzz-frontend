import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import BottomMenu from './BottomMenu'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
	return (
		<div>
			<Box display={'flex'}>
				<Sidebar />
				<Box width={'100%'}>
					<Header />
					<BottomMenu />
					<Container sx={{ marginTop: '20px' }}>
						<Outlet />
					</Container>
				</Box>
			</Box>
		</div>
	)
}

export default Layout
