import React, {useCallback, useState} from 'react';
import {Stack, useRouter, useSearchParams} from "expo-router";
import colors from "../../styles/colors";
import ScreenHeaderButton from "../../components/ScreenHeaderButton";
import {ArrowLeftIcon, ShareIcon} from "react-native-heroicons/outline";
import {ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, View} from "react-native";
import {useSearchJobQuery} from "../../features/search/queries";
import NearByJobCard from "../../components/cards/NearByJobCard";
import fonts from "../../styles/fonts";

const Search = () => {
    const router = useRouter()
    const params = useSearchParams()
    const {searchTerm} = params
    const [page, setPage] = useState(1)


    const {data, isSuccess, isLoading, refetch} = useSearchJobQuery({
        PositionTitle: searchTerm,
        Page: page,
    })

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await refetch()
        setRefreshing(false)
    }, []);


    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: colors.white,}}
        >
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: colors.primary,
                    },
                    headerShadowVisible: false,
                    headerLeft: () => <ScreenHeaderButton
                        icon={<ArrowLeftIcon color={colors.gray}/>}
                        onPress={() => router.back()}
                    />,
                    headerRight: () => <ScreenHeaderButton
                        icon={<ShareIcon color={colors.black}
                        />}/>,
                    headerTitle: "",
                }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
            >
                <View style={{
                    marginTop: 14,
                }}>
                    <Text
                        style={{
                            marginTop: 10,
                            paddingHorizontal: 10,
                            fontSize: fonts.lg,
                            color: colors.gray700,
                        }}>Searching for
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: fonts.xl,
                                color: colors.gray800,
                            }}
                        > {searchTerm}</Text>
                    </Text>
                    {isLoading && <ActivityIndicator color={colors.gray500}/>}
                    {isSuccess && data?.SearchResult?.SearchResultItems?.map(job =>
                        <NearByJobCard
                            key={`nearby_jobs_${job?.MatchedObjectId}`}
                            item={job}
                            onPress={() => {
                                router.push(`/jobs/${job.MatchedObjectId}`)
                            }}
                        />
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Search;
