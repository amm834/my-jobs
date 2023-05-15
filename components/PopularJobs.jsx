import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import PopularCard from "./cards/PopularCard";
import {useQuery} from "@tanstack/react-query";
import {searchJob} from "../services/job.service";

const PopularJobs = () => {
    const {data, isError, isLoading, isSuccess} = useQuery({
        queryKey: ['search'],
        queryFn: searchJob,
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
                        data={data.data}
                        renderItem={({item}) => {
                            return <PopularCard
                                item={item}
                                onCardPress={() =>{}}
                            />
                        }}
                        keyExtractor={item => item.job_posted_at_timestamp}
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
