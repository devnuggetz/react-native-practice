import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Tv from '../screens/tv';
import Disney from '../screens/disney';
import Sports from '../screens/sports';
import News from '../screens/news';

const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tv" component={Tv} />
      <Tab.Screen name="Disney" component={Disney} />
      <Tab.Screen name="Sports" component={Sports} />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  );
}
