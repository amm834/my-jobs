import React from 'react';
import {Alert, Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid'
import {Link, useRouter} from "expo-router";
import colors from "../styles/colors";

const Welcome = () => {
    const router = useRouter()
    return (
        <>
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

            {/* serach box */}
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
        </>
    );
};

export default Welcome;
