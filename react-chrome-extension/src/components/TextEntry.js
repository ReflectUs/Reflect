import React, { Component } from 'react'
import styled from 'styled-components';
import { db } from "../firebase";


const FormDiv = styled.form`
  border: none;
  height: 65%;
  `;

const StyledTextArea = styled.textarea`
  border: none;
  resize: none;
  outline: none;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  margin: 10px;
  height: 100%;
  ::placeholder,
  ::-webkit-textarea-placeholder {
    color: white;
  }
  :-ms-textarea-placeholder {
     color: white;
  }
  `;

const StyledInput = styled.input`
  border: 1px solid white;
  resize: none;
  background: transparent;
  border-radius: 5px;
  color: #fff;
  margin: 10px;
`;

export default class TextEntry extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let uid = localStorage.getItem("uid");
    let date = (new Date()).toLocaleString().split(',')[0].replace(new RegExp('/','gi'), "-");
    var entryRef = db.ref('entries/' + uid + "/" + date);
    entryRef.once("value", (snapshot) => {
      let exists = snapshot.val() != null;
      if(exists) {
        alert("You have already written something today");
      } else {
        entryRef.set({
          entry: this.state.value
        });
      }
      this.setState({
        value: ""
      });
      alert("Your entry can be viewed at any time.")
    });
    // TODO: fix this
    event.preventDefault();
  }

  render() {
    return (
      <FormDiv onSubmit={this.handleSubmit}>
        <label>
          <StyledTextArea placeholder="Thoughts..." value={this.state.value} onChange={this.handleChange} />
        </label>
        <StyledInput type="submit" value="Submit" />
      </FormDiv>
    );
  }
}
