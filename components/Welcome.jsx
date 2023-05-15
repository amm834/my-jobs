import React, {useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid'
import {useRouter} from "expo-router";
import colors from "../styles/colors";

const jobTypes = ['Full Time', 'Part Time', 'Contractor']

const Welcome = () => {
    const router = useRouter()
    const [selectedJobType, setSelectedJobType] = useState("Full Time")
    return (
        <View>
            <View>
                <Text
                    style={{
                        fontSize: 14,
                    }}>Hello Aung Myat Moe</Text>
                <Text
                    style={{
                        fontSize: 24,
                        color: "grey",
                        marginTop: 4,
                    }}>Find your perfect job</Text>
            </View>

            {/* search box */}
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
            }}>
                <TextInput
                    style={{
                        height: 45,
                        borderColor: colors.indigo50,
                        borderRadius: 10,
                        padding: 10,
                        marginTop: 10,
                        backgroundColor: colors.indigo50,
                        flex: 6,
                    }}
                    placeholder="What are  you looking for"
                />
                <TouchableOpacity style={{
                    backgroundColor: colors.indigo,
                    borderRadius: 10,
                    marginTop: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 4,
                    flex: 1,
                }}>
                    <MagnifyingGlassIcon color="white"/>
                </TouchableOpacity>
            </View>

            <View style={{
                marginTop: 10,
            }}>
                <FlatList
                    data={jobTypes}
                    horizontal
                    contentContainerStyle={{
                        columnGap: 8,
                    }}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={{
                                borderRadius: "15%",
                                borderColor: selectedJobType === item ? colors.indigo500 : colors.indigo300,
                                borderWidth: 1,
                                paddingVertical: 6,
                                paddingHorizontal: 8,
                            }}
                                              onPress={() => setSelectedJobType(item)}
                            >
                                <Text style={{
                                    color: item === selectedJobType ? colors.gray800 : colors.gray500,
                                }}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item}
                />
            </View>
        </View>
    );
};

export default Welcome;
