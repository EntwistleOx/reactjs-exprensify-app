// Higher Order Components (HOC) / A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please dont share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requiereAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? (<WrappedComponent {...props} />) : (<p>Please authenticate</p>)}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requiereAuthentication(Info)
// ReactDOM.render(<AdminInfo isAdmin={true} info="This are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth={false} info="This are the details" />, document.getElementById('app'))