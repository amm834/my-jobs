import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native'
import {Stack} from "expo-router";
import ScreenHeaderButton from "../components/ScreenHeaderButton";
import Welcome from "../components/Welcome";
import {Bars4Icon, UserIcon} from "react-native-heroicons/solid";
import colors from "../styles/colors";

const Index = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: colors.primary,
                    },
                    headerShadowVisible: false,
                    headerLeft: () => <ScreenHeaderButton
                        icon={<Bars4Icon color={colors.gray}/>}
                    />,
                    headerRight: () => <ScreenHeaderButton
                        icon={<UserIcon color={colors.indigo}
                        />}/>,
                    headerTitle: "",
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: 10,
                }}>
                    <Welcome/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Index;
