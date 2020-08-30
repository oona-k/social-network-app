import React from 'react'
import { logOut } from '../../store/actions/authActions'
import { connect } from 'react-redux'

class Register extends React.Component {

    componentDidMount = () => {
        this.props.logOut();
    }

    render() {
        return (
            <div>
                {
                    this.props.loginStatus ?
                    <div className="container"><h4>Logout fail</h4></div> :
                    <div className="container"><h4>You have been logged out</h4></div>
                }
            </div>

        );

    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: !state.firebase.auth.isEmpty
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);