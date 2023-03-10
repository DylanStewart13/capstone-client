import React from 'react';

export default class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    render() {
        return (
            <div className="sign-in-wrapper">
                <div className="form">
                    <div className="input-wrapper">
                        <div>Email</div>
                        <input className="input" type="text" placeholder="Email Address" onChange={e => this.setState({ email: e.target.value })} />
                    </div>
                    <div className="input-wrapper">
                        <div>Password</div>
                        <input className="input" type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />
                    </div>

                    <div className="btn" onClick={() => this.props.signIn(this.state.email, this.state.password)}>Sign in</div>
                </div>
            </div>
        )
    }
}