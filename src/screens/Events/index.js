// Import third-party dependencies
import React from "react";
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Event from '../../components/event/Event';


// Component for events screen in main navigation
export class EventsScreen extends React.Component {
  static navigationOptions = {
    title: "Events"
  };
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>
          <View style={styles.sectionTitleView}>
            <Text style={styles.sectionTitle}> TODAY'S EVENTS </Text>
          </View>
          <Event style={styles.eventRow}/>
          <View style={styles.sectionTitleView}>
            <Text style={styles.sectionTitle}> COMING UP </Text>
          </View>
          <Event style={styles.eventRow}/>
        </SafeAreaView>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:5
  },
  sectionTitle: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionTitleView: {
    marginLeft:5,
    marginBottom:13,
    borderBottomColor: "#0033A0",
    borderBottomWidth: 2,
    alignSelf:'flex-start',
  },
  eventRow: {
    justifyContent:'center',
    alignItems: 'center',
  },
});
