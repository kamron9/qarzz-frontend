import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Routers from './root'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routers />
	</BrowserRouter>
)
