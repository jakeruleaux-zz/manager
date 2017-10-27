import React from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passWordChanged } from '../actions';

class LogInForm extends React.Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPassWordChange(text) {
    this.props.passWordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@email.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
            onChangeText={this.onPassWordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, { emailChanged, passWordChanged })(LogInForm);
