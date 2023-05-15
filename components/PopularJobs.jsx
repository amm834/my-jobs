import React from 'react';
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import PopularJobCard from "./cards/PopularJobCard";
import {useSearchJobQuery} from "../features/search/queries";
import log from "../utils/logger";
import {useRouter} from "expo-router";

const PopularJobs = () => {
    const router = useRouter()
    const {data, isSuccess, isLoading} = useSearchJobQuery({
        PositionTitle: 'Software Engineer'
    })

    return (
        <View style={{
            marginTop: 14,
        }}>
            <View style={{
                flexDirection: 'row',
            }}>
                <Text style={{
                    flex: 1,
                    color: colors.gray800,
                    fontSize: fonts.xl,
                }}>Popular Jobs</Text>
                <TouchableOpacity>
                    <Text style={{
                        color: colors.gray500,
                        fontSize: fonts.md,
                    }}>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                marginTop: 14,
            }}>
                {isLoading && <ActivityIndicator color={colors.gray500}/>}
                {isSuccess &&
                    <FlatList
                        data={data?.SearchResult?.SearchResultItems}
                        renderItem={({item}) => {
                            return <PopularJobCard
                                item={item}
                                onCardPress={(item) => {
                                    log.debug(item)
                                    router.push(`/jobs/${item.MatchedObjectId}`)
                                }}
                            />
                        }}
                        keyExtractor={item => item.MatchedObjectId}
                        horizontal={true}
                        contentContainerStyle={{
                            columnGap: 16,
                        }}
                    />}
            </View>
        </View>
    );
};

export default PopularJobs;
