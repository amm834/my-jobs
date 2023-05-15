import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import {checkImageURL} from "../../utils/checkImage";

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
                width: 200,
            }}
        >
            <TouchableOpacity
                style={{
                    width: 40,
                    height: 40,
                    backgroundColor: colors.gray100,
                    borderRadius: 10,
                    shadowColor: colors.gray100,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}
                onPress={() => onCardPress(selectedJobType, item)}
            >
                <Image
                    source={{
                        uri: checkImageURL(item.employer_logo)
                            ? item.employer_logo
                            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                    }}
                    resizeMode={'contain'}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </TouchableOpacity>
            <Text style={{
                color: colors.gray500,
                fontSize: fonts.md,
                marginTop: 15,
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
