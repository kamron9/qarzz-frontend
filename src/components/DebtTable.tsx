import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'
import { debtData } from '../data'
import TableMenu from './TableMenu'

const DebtTable = () => {
	return (
		<TableContainer component={Paper} sx={{ maxWidth: '1200px' }}>
			<Table>
				<TableHead
					sx={{ backgroundColor: 'var(--primary-color)', color: 'white' }}
				>
					<TableRow>
						<TableCell sx={{ fontWeight: 900 }}>Ismi</TableCell>
						<TableCell sx={{ fontWeight: 900 }}>Qarz miqdori</TableCell>
						<TableCell
							sx={{
								fontWeight: 900,
								display: { xs: 'none', md: 'table-cell' },
							}}
						>
							Telefon raqami
						</TableCell>
						<TableCell
							sx={{
								fontWeight: 900,
								display: { xs: 'none', sm: 'table-cell' },
							}}
						>
							Qarz olingan sana
						</TableCell>
						<TableCell sx={{ fontWeight: 900 }}>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{debtData.map((debt, index) => (
						<TableRow key={index}>
							<TableCell>{debt.debtor}</TableCell>
							<TableCell>{debt.debt.toLocaleString('ru-Ru')} so'm</TableCell>
							<TableCell
								sx={{
									display: { xs: 'none', md: 'table-cell' },
								}}
							>
								{debt.phone}
							</TableCell>
							<TableCell
								sx={{
									display: { xs: 'none', sm: 'table-cell' },
								}}
							>
								{debt.date}
							</TableCell>
							<TableCell>
								<TableMenu />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default DebtTable
