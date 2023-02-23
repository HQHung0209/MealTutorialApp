import * as React from 'react';
import { Text, View } from 'react-native';
import { COLORS } from '../contain/theme';
import { FavoriteScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { IconHeader } from "../components";
import { useSelector } from 'react-redux';

const FavoriteStack = createStackNavigator();



const FavoriteStackScreen = () => {
    const favorites = useSelector((state) => state.favorite.items)

    return (
        <FavoriteStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.second,
            }}
        >
            <FavoriteStack.Screen name="FavoriteScreen" component={FavoriteScreen}
                options={{ title: 'Yeu thich', headerTitleAlign: 'center', headerRight: () => <IconHeader data={favorites} /> }}

            />
        </FavoriteStack.Navigator>
    );
}

export default FavoriteStackScreen;