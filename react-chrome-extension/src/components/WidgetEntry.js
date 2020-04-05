import React, { Component } from 'react'
import styled from 'styled-components'

export default class WidgetEntry extends Component {


  constructor(props) {
    super(props);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleSubmitSelect = this.handleSubmitSelect.bind(this);
    this.state = {
      selectValue: 'None'
    }
  }

  handleChangeSelect(event) {
    this.setState({selectValue: event.target.value});
    console.log(event.target.value);
  }

  handleSubmitSelect(event) {
    console.log("Submitted!");
  }

  render() {
    const Wrapper = styled.div`
      width: 10vw;
      height: 10vh;
      background: rgba(204, 204, 204, 0.6);
      top: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      border-radius: 10px;
      color: white;
      margin: 10px 0;
      padding-right: 10px;
      padding-left: 10px;
    `;

    const { title, label1, num1, label2, num2 } = this.props;
    
    return (
      <Wrapper>
        <div>
          {/* <form onSubmit={this.handleSubmitSelect}> */}
            <select value={this.state.selectValue} onChange={this.handleChangeSelect}>
              <option value="none">None</option>
              <option value="calendar">Calendar</option>
              <option value="gmail">Gmail</option>
            </select>
            {/* <input type="submit" value="Submit" />
          </form> */}
        </div>
        <div>
          {label1}: {num1} \\ {label2}: {num2}
        </div>
      </Wrapper>
    )
  }
}



