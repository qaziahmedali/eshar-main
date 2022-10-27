import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Components/Home';
import About from './Components/About';
import Home1 from './Components/Home1';
import Home2 from './Components/Home2';
import DailyReport from './Components/DailyReport';
import MerchHome from './Components/MerchHome';
import StoreReports from './Components/StoreReports';

const Stack = createStackNavigator();

function App() {
  function Titlew1() {
    return (
      <View>
        <Text
          style={{
            fontSize: 22,
            color: '#4F5FF3',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Live Daily Report
        </Text>
      </View>
    );
  }
  function Titlew2() {
    return (
      <View>
        <Text
          style={{
            fontSize: 22,
            color: '#4F5FF3',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Welcome Merchandisers
        </Text>
      </View>
    );
  }
  function Titlew3() {
    return (
      <View>
        <Text
          style={{
            fontSize: 22,
            color: '#4F5FF3',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          All Merchandisers Statistics
        </Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StoreReports"
          component={StoreReports}
          options={{
            headerTitle: props => <Titlew1 {...props} />,
            headerStyle: {
              height: 60,
              backgroundColor: '#fff',
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            },
            headerTintColor: '#000',
          }}
        />
        <Stack.Screen
          name="Home2"
          component={Home2}
          options={{
            headerTitle: props => <Titlew3 {...props} />,
            headerStyle: {
              height: 60,
              backgroundColor: '#fff',
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            },
            headerTintColor: '#000',
          }}
        />
        <Stack.Screen
          name="MerchHome"
          component={MerchHome}
          options={{
            headerTitle: props => <Titlew2 {...props} />,
            headerStyle: {
              height: 60,
              backgroundColor: '#fff',
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            },
            headerTintColor: '#000',
          }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="DailyReport"
          component={DailyReport}
          options={{
            headerTitle: props => <Titlew1 {...props} />,
            headerStyle: {
              height: 60,
              backgroundColor: '#fff',
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            },
            headerTintColor: '#000',
          }}
        />

        <Stack.Screen name="Home1" component={Home1} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
