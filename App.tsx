import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import getData from './02-async/async';

export default function App() {

  const [data, setData] = useState();

  useEffect(()=>{
    async function apiCall(){
      const res = await getData();
      setData(res);
    }

    // apiCall();
  },[])

  // console.log(data);

  return (
    <View style={styles.container}>
      <Text>First Child component!</Text>
      <Text>Second Child Component!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
