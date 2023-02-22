import { Component } from 'react';

class LoginButton extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return  <button className='btn btn-primary'
        onClick={this.props.OnClick}>
            Login
        </button>;
    }
}

export default LoginButton;
