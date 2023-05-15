import React from 'react';
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import PopularCard from "./cards/PopularCard";

const PopularJobs = () => {
    const isLoading = false;
    const isError = false;
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
                {isLoading ? <ActivityIndicator color={colors.gray500}/>
                    : (
                        <FlatList data={[1, 2, 3, 4, 5, 6]} renderItem={({item}) => {
                            return <PopularCard key={item}/>
                        }}
                                  keyExtractor={item => item}
                                  horizontal={true}
                                  contentContainerStyle={{
                                      columnGap: 16,
                                  }}
                        />
                    )}
            </View>
        </View>
    );
};

export default PopularJobs;
