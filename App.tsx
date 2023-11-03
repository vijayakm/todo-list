import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import Home from './src/Screens/Home';
import Authentication from './src/Screens/Authentication';
import useAuthentication from './src/Hooks/Authentication.hook';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEEFE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const App = () => {

  // hooks
  const { isAuthenticate, authenticate } = useAuthentication();

  return (
    <Provider store={store}>
      <View style={styles.container}>
        { isAuthenticate ? <Home /> : <Authentication authenticate={authenticate} /> }
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

export default App;