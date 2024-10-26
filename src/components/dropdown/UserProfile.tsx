import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { Button, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import LogoutModal from '../modal/LogoutModal'

const UserProfile = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<div>
			<Button onClick={handleClick}>
				<PermIdentityIcon fontSize='medium' />
			</Button>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem sx={{ fontSize: '14px' }}>Sozlamalar</MenuItem>
				<MenuItem sx={{ color: 'red', fontSize: '14px' }}>
					<LogoutModal />
				</MenuItem>
			</Menu>
		</div>
	)
}

export default UserProfile
