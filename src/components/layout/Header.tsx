import { Box, Container, TextField } from '@mui/material'
import UserProfile from '../dropdown/UserProfile'

const Header = () => {
	return (
		<Box
			sx={{
				backgroundColor: 'white',
				padding: '10px 20px',
				// boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
			}}
		>
			<Container
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<TextField
					placeholder='Search'
					variant='outlined'
					size='small'
					sx={{ maxWidth: '500px', width: '100%' }}
				/>
				<UserProfile />
			</Container>
		</Box>
	)
}
export default Header
