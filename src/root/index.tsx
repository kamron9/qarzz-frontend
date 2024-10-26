import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout'
import Home from '../pages/Home'

const Routers = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/archive' element={<h1>archive</h1>} />
				<Route path='/settings' element={<h1>settings</h1>} />
			</Route>
		</Routes>
	)
}

export default Routers
