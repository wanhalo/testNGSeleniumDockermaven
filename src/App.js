import React, { Component } from 'react';
import Ticker from './Ticker'
import axios from 'axios'
import _ from 'lodash'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    let self = this
    axios.get('https://api.coinmarketcap.com/v1/ticker/?convert=THB')
    .then(function (response) {
