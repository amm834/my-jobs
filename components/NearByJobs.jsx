import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import {useQuery} from "@tanstack/react-query";
import NearByJobCard from "./cards/NearByJobCard";
import {searchJob, useSearchJobQuery} from "../features/search/queries";
import {useRouter} from "expo-router";
import log from "../utils/logger";

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
                {isSuccess && data?.SearchResult?.SearchResultItems?.map(job =>
                    <NearByJobCard
                        key={`nearby_jobs_${job?.MatchedObjectId}`}
                        item={job}
                        onPress={() => {
                            log.debug(job)
                            router.push(`/jobs/${job.MatchedObjectId}`)
                        }}
                    />
                )}
            </View>
        </View>
    );
};

export default PopularJobs;
