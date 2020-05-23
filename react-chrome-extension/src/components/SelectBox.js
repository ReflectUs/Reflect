import React, { Component } from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.dropDown = this.dropDown.bind(this);
    this.state = {
      items: this.props.items || [],
      showItems: false,
      selectedItem: this.props.items && this.props.items[0],
    };
  }

// this is a change

  dropDown(event) {
    this.setState({
      showItems: !this.state.showItems,
    });
  }

  selectItem(item) {
    this.setState({
      selectedItem: item,
      showItems: false,
    })
  }

  render() {
    var selectBoxArrow = {
      width: "30px",
      height: "30px",
      margin: "0px",
      padding: "0px",
      display: "inline-block",
      background: "#aaa"
    };
    const SelectedDiv = styled.div`
      float: left;
      font-size: 16px;
      font-weight: bold;
    `;

    const ChevronDiv = styled.div`
      float: right;
      margin-left: 6px;
    `;

    const DropDownDiv = styled.div`
      


    `;

    return (
      <>
        <div style={{ selectBoxArrow }} onClick={this.dropDown}>
          {/* <span className={`${this.state.showItems ? selectBoxArrowUp : selectBoxArrowDown}`}/> */}
          <SelectedDiv>
            { this.state.selectedItem.value }
          </SelectedDiv>
          <ChevronDiv>
            {this.state.showItems ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </ChevronDiv>
        </div>

        <div style={{ display: this.state.showItems ? "block" : "none" }}>
          {this.state.items.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  this.selectItem(item);
                }}
              >
                {item.value}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default SelectBox;
