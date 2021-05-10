import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
class UserGithub extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  username: '',
  githubtUrl: '',
  avatarUrl: '',
  }
  }
  componentDidMount() {
  $.get(this.props.source, (result) => {
  console.log(result);
  const data = result;
  if (data) {
  this.setState({
  username: data.login,
  githubtUrl: data.html_url,
  avatarUrl: data.avatar_url,
  created_at:data.created_at,
  updated_at:data.updated_at,
  location:data.location
  });
  }
  });
  }
  render() {
  return (
  <div>
  <h3>{this.state.username}</h3>
  <img src={this.state.avatarUrl} alt=""/>
  <a href={this.state.githubtUrl}>link</a>
  <br></br>
  <text>創建日期: {this.state.created_at}</text>
  <br></br>
  <text>更新日期: {this.state.updated_at}</text>
  <br></br>
  <text>{this.state.location}</text>
  </div>
  );
  }
  }
ReactDOM.render(
  <UserGithub source="https://api.github.com/users/940223" />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
