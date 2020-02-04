import React, { Component } from 'react';

class Test extends Component {
  constructor() {
    super();
    this.state = {
      name: '字典管理',
      link: 'http://www.runoob.com'
    };
  }

  render() {
    return (
      <div>
        this is test:{this.state.name},{this.state.link}
      </div>
    );
  }
}

export default Test;
