import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import { useState } from 'react'

const LogoutModal = () => {
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<>
			<span onClick={handleClickOpen}>Chiqish</span>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Akkauntdan chiqmoqchimisiz?</DialogTitle>

				<DialogActions>
					<Button onClick={handleClose}>Yo'q</Button>
					<Button
						variant='contained'
						color='error'
						onClick={handleClose}
						autoFocus
					>
						Ha
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}
export default LogoutModal
