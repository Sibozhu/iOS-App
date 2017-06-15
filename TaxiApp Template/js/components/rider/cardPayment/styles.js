
'use strict';

import { StyleSheet } from "react-native";
var React = require('react-native');
var { Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
export default {

  iosHeader: {
    backgroundColor: '#fff'
  },
  aHeader: {
    backgroundColor: '#fff',
    borderColor: '#aaa',
    elevation: 3,
    
  },
  iosHeaderTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1b557a'
  },
  aHeaderTitle: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
    marginTop: -5,
    color: '#1b557a'
  },
  cardSelect: {
    margin: 20,
    marginLeft: 20,
    padding: 10,
    marginTop: 0,
    paddingLeft: 0
  },
  payCard: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: -10,
    borderBottomWidth: 1,
    
  },
  paytmIcon: {
    width: 35,
    height: 13,
    padding: 5,
    paddingTop: 15
  },
};
