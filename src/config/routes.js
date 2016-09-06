import React from 'react'
import { Route } from 'react-router'
import App from '../App'
import TodoContainer from '../containers/TodosContainer'
import Van from '../components/Test'

module.exports = (
	<Route path='/' component={ App }>
		<Route path='/todos' component={ TodoContainer } />
		<Route path='/test' component={ Van } />
	</Route>
)