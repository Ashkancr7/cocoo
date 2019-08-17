import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,


} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';


export default class Header extends Component {
  /*
      */
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.iconBoxStyle}>

          <Icon name="arrowleft" size={30} color="#fff" onPress={()=>this.props.navigation.goBack()}/>

        </View>
        <View style={styles.boxtextstyle}>

          <Text style={styles.textstyle}>{this.props.text}</Text>
          

        </View>





      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#eb4129',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: '100%',
    // shadowColor:'#ccc',
    // shadowOffset:{width:0 , height:2},
    // shadowOpacity:0.2,
    // elevation:4,
    flexDirection: 'row',




  },
  boxtextstyle: {
    height: '100%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  textstyle: {
    fontSize: 20,
    fontFamily: 'Shabnam',
    color: '#fff'
  },
  iconBoxStyle: {
    height: '100%',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 1,
    
  },

});
