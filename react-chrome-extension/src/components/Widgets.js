import React, { Component } from 'react'
import Plus from '../assets/plusWhite.png'
import WidgetEntry from './WidgetEntry';
import styled from 'styled-components'
import { auth, GoogleAuthProvider } from "../firebase"
// import { giveCalendarAccess } from "../GoogleAuth"

export default class Widgets extends Component {

  constructor(props) {
    super(props);
    this.createWidget = this.createWidget.bind(this);
    // widget array will have Label of widget, label1, number1, label2, number2 in that order. This will be one row
    this.state = {
      widgetArray: []
    }
  }

  createWidget() {
    const widgetInfo = this.state.widgetArray;
    // giveCalendarAccess(GoogleAuthProvider);
    console.log(GoogleAuthProvider);
    console.log(localStorage.getItem("newToken"));
    console.log(auth.currentUser.email);

    let token = localStorage.getItem("newToken");
    let url = `https://www.googleapis.com/calendar/v3/calendars/${auth.currentUser.email}/events?access_token=${token}`;
    console.log(url);
    fetch(url, {
      method: "GET"
    }).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });

    const label1 = 'Calendar';
    const num1 = 5;
    const label2 = 'Other Stuff'
    const num2 = 10;
    if(this.state.widgetArray.length < 5) {
      widgetInfo.push([ label1, num1, label2, num2 ]);
    } else {
      alert("You have the maximum number of widgets");
    }
    this.setState({widgetArray: widgetInfo})
  }

  

  render() {

    const PlusImg = styled.img`
      height: 40px;
      position: absolute;
      top: 30%;
      right: 30px;
    `

    const Wrapper = styled.div`
      position: absolute;
      top: 40%;
      right: 30px;
      height: 60%;
    `;

    const PlusButton = styled.button`
      border: none;
      background-color: rgba(0,0,0,0);
      :focus{ outline-color: #FFF }
    `;

    return (
      <>
      <PlusButton onClick={this.createWidget.bind(this)}>
        <PlusImg src={Plus}/>
      </PlusButton>
      <Wrapper>
        {this.state.widgetArray.map((widget, index) => {
          return <WidgetEntry title={widget[0]} label1={widget[1]} num1={widget[2]} label2={widget[3]} num2={widget[4]} />
        })}
      </Wrapper>
      </>
    )
  }
}

