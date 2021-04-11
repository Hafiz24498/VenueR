
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button, Alert, ScrollView} from 'react-native';

const VenueScreen = () => {
  return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
           <View style={StyleSheet.container}>
             <Text style={styles.header}>Choose The Venue</Text>
             <Button style={styles.contents}
          title="Venue 1"
          onPress={() => Alert.alert('Right button pressed')}
        />
        <Text></Text>
        <Button
          title="Venue 2"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 3"
          onPress={() => Alert.alert('Right button pressed')}
        />
        <Text></Text>
        <Button
          title="Venue 4"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 5"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 6"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 7"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 8"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 9"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 10"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 11"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 12"
          onPress={() => Alert.alert('Right button pressed')}
        />
        <Text></Text>
        <Button
          title="Venue 13"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 14"
          onPress={() => Alert.alert('Right button pressed')}
        />
        <Text></Text>
        <Button
          title="Venue 15"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 16"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 17"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 18"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 19"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 20"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 21"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 22"
          onPress={() => Alert.alert('Right button pressed')}
        />
        <Text></Text>
        <Button
          title="Venue 23"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 24"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 25"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 26"
          onPress={() => Alert.alert('Right button pressed')}
        /><Text></Text>
        <Button
          title="Venue 27"
          onPress={() => Alert.alert('Right button pressed')}
        />
        <Text></Text>
        <Button
          title="Venue 28"
          onPress={() => Alert.alert('Right button pressed')}
        />
        <Text></Text>
        <Button
          title="Venue 29"
          onPress={() => Alert.alert('Right button pressed')}
        />
        <Text></Text>
        <Button
          title="Venue 30"
          onPress={() => Alert.alert('Right button pressed')}
        />

             </View> 
</ScrollView>
        </SafeAreaView>

  );
}

export default VenueScreen;

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fadcc8',
  //marginHorizontal: 16,
  },scrollView: {
    //backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  header: {
  fontSize: 35,
  textAlign: 'center',
  margin: 15,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  contents: {
  fontSize: 20,
  textAlign: 'center',
  color: '#333333',
  marginBottom: 5,
  },fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  });
