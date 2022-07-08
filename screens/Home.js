import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native-gesture-handler";

let customFonts = {
  "Debrosee": require("../assets/Debrosee-AlPnL.ttf")
};


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>AGENTS OF S.H.I.E.L.D.</Text>
            </View>
          <View style={styles.cardContainer}>
              <Image
              source={require("../assets/bg1.jpg")}
              style={styles.storyImage}
            ></Image>
            
          </View>
          <View style={styles.textContainer}>
            Note: Use the navigation to read stories.
          </View>
          
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
    textAlign:"center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Debrosee"
  },
  storyImage:{
    // width:"90%",
    // height: RFValue(250),
    alignSelf: "center",
    resizeMode: "center"
  },
  textContainer:{
    paddingTop:RFValue(20),
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Debrosee",
    textAlign:"center"
  }
});
