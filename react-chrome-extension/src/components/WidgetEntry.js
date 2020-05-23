import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import SelectBox from './SelectBox';

export default class WidgetEntry extends Component {
  constructor(props) {
    super(props);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleSubmitSelect = this.handleSubmitSelect.bind(this);
    this.state = {
      selectValue: "None",
    };
  }

  handleChangeSelect(event) {
    this.setState({ selectValue: event.target.value });
    console.log(event.target.value);
  }

  handleSubmitSelect(event) {
    console.log("Submitted!");
  }

  render() {
    const Wrapper = styled.div`
      width: 12vw;
      /* height: 10vh; */
      background: rgba(204, 204, 204, 0.6);
      top: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: left;
      border-radius: 10px;
      color: white;
      margin: 10px 0;
      /* padding-right: 10px;
      padding-left: 10px; */
      padding: 10px;
    `;

    const Select = styled.select`
      /* text-decoration: none; */
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-color: rgba(2, 2, 2, 0);
      border-color: rgba(2, 2, 2, 0);
      color: white;
      
    `;

    const SelectDiv = styled.div`
      :hover {
        border: 1px solid #000;
        /* background-color: #f00; */
      }
      border-radius: 4px;
      font-weight: bold;
      padding: 2px;
      font-size: 15px;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu; /* Not working */
    `;

    var FaStyles = {
      marginTop: '5px',
      pointerEvents: 'none'
    }

    const InfoDiv = styled.div`
      font-size: 14px;
      margin-top: 10px;
      margin-bottom: 8px;
      display: flex;
    `;

    const { title, label1, num1, label2, num2 } = this.props;

    return (
      <Wrapper>
        {/* <SelectDiv>
          <Select
            value={this.state.selectValue}
            onChange={this.handleChangeSelect}
          >
            <option value="none">None</option>
            <option value="calendar">Calendar</option>
            <option value="gmail">Gmail</option>
          </Select>
          <FontAwesomeIcon style={FaStyles} icon={faChevronDown} />
        </SelectDiv> */}
        <SelectBox 
          items = {[
            { value: 'Calendar', id: 1},
            { value: 'Gmail', id: 2 },
          ]}
        />

        <InfoDiv>
          This Week <br/>
          5: Unique People <br/>
          10: Meetings
        </InfoDiv>
      </Wrapper>
    );
  }
}
