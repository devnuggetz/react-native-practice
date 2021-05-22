import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Tv from '../screens/tv';
import Disney from '../screens/disney';
import Sports from '../screens/sports';
import News from '../screens/news';
import {Image, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#141b29',
          height: 100,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://cdn.iconscout.com/icon/free/png-128/house-1439754-1214326.png',
                }}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? 'white' : 'grey',
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? 'white' : 'grey',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tv"
        component={Tv}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://cdn.iconscout.com/icon/free/png-128/tv-1439709-1214282.png',
                }}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? 'white' : 'grey',
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? 'white' : 'grey',
                }}>
                TV
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Disney"
        component={Disney}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://download.logo.wine/logo/Disney%2B/Disney%2B-Logo.wine.png',
                }}
                style={{
                  height: 60,
                  width: 60,
                  tintColor: focused ? 'white' : 'grey',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Sports"
        component={Sports}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://cdn.iconscout.com/icon/free/png-128/american-football-1442310-1218379.png',
                }}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? 'white' : 'grey',
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? 'white' : 'grey',
                }}>
                Sports
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://cdn.iconscout.com/icon/free/png-128/newspaper-1440163-1214664.png',
                }}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? 'white' : 'grey',
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? 'white' : 'grey',
                }}>
                News
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
