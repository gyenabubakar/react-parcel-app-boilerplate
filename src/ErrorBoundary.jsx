import React, { Component, Fragment } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
    };
  }

  componentDidCatch() {
    this.setState({ isError: true });
  }

  render() {
    return this.state.isError ? (
      <p className="error">Oops! An error occured.</p>
    ) : (
      <Fragment>{this.props.children}</Fragment>
    );
  }
}

export default ErrorBoundary;
