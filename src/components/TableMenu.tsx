import AddIcon from '@mui/icons-material/Add'
import DoneIcon from '@mui/icons-material/Done'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import {
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from '@mui/material'
import { useState } from 'react'
const TableMenu = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			<IconButton onClick={handleClick}>
				<MoreHorizIcon />
			</IconButton>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem>
					<ListItemIcon>
						<AddIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText>Qarz qo'shish</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<DoneIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText>Qarzni to'lash</ListItemText>
				</MenuItem>
			</Menu>
		</>
	)
}

export default TableMenu
