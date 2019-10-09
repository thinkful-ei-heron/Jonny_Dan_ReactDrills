import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      toggleState: props.sections.map(section => {
        return false;
      })
    };
  }

  static defaultProps = {
    sections: []
  };

  toggleDisplay = index => {
    if (this.props)
      this.setState({ toggleState: this.state.toggleState.map((item, i) => (i === index ? true : false)) });
    else this.setState({ toggleState: [] });
  };

  renderContent(content) {
    return <p>{content}</p>;
  }

  render() {
    return (
      <ul>
        {this.props.sections.map((section, i) => {
          return (
            <li key={i}>
              <button onClick={() => this.toggleDisplay(i)}>{section.title}</button>
              {this.state.toggleState[i] && this.renderContent(section.content)}
            </li>
          );
        })}
      </ul>
    );
  }
}
