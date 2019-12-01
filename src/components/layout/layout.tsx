import React from 'react';
import LayoutDiv from './layout.style';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <LayoutDiv>
        {children}
      </LayoutDiv>
    );
  }
}

export default Layout;
