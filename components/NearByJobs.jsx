import React from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import PopularJobCard from "./cards/PopularJobCard";
import {useQuery} from "@tanstack/react-query";
import {searchJob} from "../services/job.service";
import NearByJobCard from "./cards/NearByJobCard";

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
                }}>Nearby Jobs</Text>
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
                {isSuccess && data?.data.map(job =>
                    <NearByJobCard
                        key={`nearby_jobs_${job?.job_id}`}
                        item={job}
                        onPress={() => {
                        }}
                    />
                )}
            </View>
        </View>
    );
};

export default PopularJobs;
