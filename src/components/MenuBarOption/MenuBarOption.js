import React, { Component } from 'react';
import { SwissProvider } from 'swiss-react';
import SW from './MenuBarOption.swiss';

class MenuBarOption extends Component {
  constructor(props){
    super(props);

    this.state ={ 
      selected: false,
    }
  }

  activeDropdown = () => {
    const { selected } = this.state;
    this.setState({selected: !selected})
  }
  render() {
    const { selected } = this.state;
    const { logo, option } = this.props; 
    return (
      <SwissProvider selected={selected}> 
        <SW.Wrapper> 
          <SW.Top>
            <SW.Logo src={logo}/>
            <SW.Option>
              {option}
            </SW.Option>
            <SW.Dropdown onClick={this.activeDropdown}>{selected ? 'There' : 'Here'}</SW.Dropdown>
          </SW.Top>
          <SW.ContentWrapper> 
            ContentWrapper
          </SW.ContentWrapper>
        </SW.Wrapper>
      </SwissProvider>
    )
  }
}

export default MenuBarOption;