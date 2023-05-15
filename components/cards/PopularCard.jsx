import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const PopularCard = ({
                         item,
                         selectedJobType,
                         onCardPress,
                     }) => {
    return (
        <TouchableOpacity
            style={{
                padding: 15,
                borderRadius: 10,
                marginVertical: 5,
                height: 'auto',
                width:200,
            }}
        >
            <TouchableOpacity
                style={{
                    width: 40,
                    height: 40,
                    backgroundColor: colors.gray100,
                    borderRadius: 10,
                }}
                onPress={() => onCardPress(selectedJobType, item)}
            >
                <Image
                    source={{uri: item.employer_logo}}
                    resizeMode={'contain'}
                    style={{width: 40, height: 40}}
                />
            </TouchableOpacity>
            <Text style={{
                color: colors.gray500,
                fontSize: fonts.md,
                marginTop: 5,
                fontWeight: 'bold',
            }}>{item.employer_name}</Text>

            <View>
                <Text
                    style={{
                        fontSize: fonts.xl,
                    }}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                >
                    {item.job_title}
                </Text>
                <Text style={{
                    color: colors.gray500,
                    fontSize: fonts.md,
                    marginTop: 5,
                    marginBottom: 5,
                    width: '100%',
                }}>
                    {item.job_country}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default PopularCard;
