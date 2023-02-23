import React from 'react';
import { Text, View } from 'react-native';
import { HomeScreen, CategoryScreen, ProductScreen } from '../screens';
import { COLORS } from '../contain/theme';

import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.second,
            }}
        >
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Mon an ngon', headerTitleAlign: 'center' }} />
            <HomeStack.Screen name="CategoryScreen" component={CategoryScreen}
                options={({ route }) => ({
                    title: route.params.categoryName
                })}
            />
            <HomeStack.Screen name="ProductScreen" component={ProductScreen}
                options={({route})=>({
                    title : route.params.productName
                })}
            />
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;