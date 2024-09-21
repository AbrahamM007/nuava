import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import WatchScreen from './WatchScreen';
import AppScreen from './AppScreen';
import ProfileScreen from './ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native';

// Create a reusable tab icon component
const TabIcon = ({ name, color, size = 24 }: { name: string; color: string; size?: number }) => (
  <Icon name={name} size={size} color={color} />
);

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const colorScheme = useColorScheme(); // Get the current color scheme 

  // Define colors for both light and dark modes
  const colors = {
    light: {
      default: '#465532', // Default light mode color
      focused: '#8CBC4C', // Focused light mode color
    },
    dark: {
        default: '#465532', // Default light mode color
        focused: '#8CBC4C', // Focused light mode color
    },
  };

  // Determine the current color scheme
  const currentColors = colors[colorScheme ?? 'light'];

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: colorScheme === 'dark' ? '#e8e8e8' : '#e8e8e8',
          },
          tabBarActiveTintColor: currentColors.focused,
          tabBarInactiveTintColor: currentColors.default,
          tabBarIcon: ({ color, size }) => {
            let iconName = '';
            
            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'Watch':
                iconName = 'tv-outline';
                break;
              case 'Apps':
                iconName = 'apps-outline';
                break;
              case 'Profile':
                iconName = 'person-outline';
                break;
            }

            return <TabIcon name={iconName} color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Watch"
          component={WatchScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Apps"
          component={AppScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
