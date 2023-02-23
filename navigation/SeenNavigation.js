import * as React from 'react';
import { Text, View } from 'react-native';

import { COLORS } from '../contain/theme';
import { SeenScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { IconHeader } from "../components";
import { useSelector } from 'react-redux';

const SeenStack = createStackNavigator();


const SeenStackScreen = () => {
    const viewed = useSelector((state) => state.viewed.items)
    return (
        <SeenStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.second,
            }}
        >
            <SeenStack.Screen name="FavoriteScreen" component={SeenScreen} options={{ title: 'Da xem', headerTitleAlign: 'center', headerRight: () => <IconHeader seen data={viewed} /> }} />
        </SeenStack.Navigator>
    );
}

export default SeenStackScreen;