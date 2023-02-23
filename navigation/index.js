import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../contain/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeNavigation';
import SeenStackScreen from './SeenNavigation';
import FavoriteStackScreen from './FavoriteNavigation';


const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                            break;
                        case 'Seen':
                            iconName = focused ? 'ios-time' : 'ios-time-outline';
                            break;
                        case 'Favorites':
                            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
                            break;
                        default:
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: COLORS.second,
                tabBarInactiveTintColor: COLORS.second,
                tabBarStyle: {
                    backgroundColor: COLORS.primary,
                    height: 65,
                    paddingBottom: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                },
                headerShown: false,
            })}
            initialRouteName={'Home'}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: 'Trang chủ', headerTitleAlign: 'center' }} />
            <Tab.Screen name="Seen" component={SeenStackScreen} options={{ title: 'Đã xem', headerTitleAlign: 'center' }} />
            <Tab.Screen name="Favorites" component={FavoriteStackScreen} options={{ title: 'Yêu thích', headerTitleAlign: 'center' }} />
        </Tab.Navigator>
    )
}

export default MyTabs