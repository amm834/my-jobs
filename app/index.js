import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native'
import {Stack, useRouter} from "expo-router";
import ScreenHeaderButton from "../components/ScreenHeaderButton";
import Welcome from "../components/Welcome";
import {Bars4Icon, UserIcon} from "react-native-heroicons/solid";
import colors from "../styles/colors";
import PopularJobs from "../components/PopularJobs";
import NearByJobs from "../components/NearByJobs";

const Index = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
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
                <View
                    style={{
                        flex: 1,
                        padding: 10,
                    }}>
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        onSearchClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <PopularJobs/>
                    <NearByJobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Index;
