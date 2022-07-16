import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';


const getPopularMovies = async () =>{
  const resp = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=812dd12618537e43dd39d107c4a6c18d&language=en-US&page=1');
  return resp.data.results;
}
export default function App() {
  getPopularMovies()
  return (
    <View style={styles.container}>
      <Text>Movies App</Text>
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
