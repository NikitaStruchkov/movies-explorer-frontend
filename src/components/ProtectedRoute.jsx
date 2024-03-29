import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to='/signin' replace />
  )
}

export default ProtectedRouteElement

// HOC ProtectedRoute — этим компонентом защитите роут /, чтобы на него не смогли перейти неавторизованные пользователи