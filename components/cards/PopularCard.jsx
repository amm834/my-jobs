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
                marginTop: 5
            }}>{item.employer_name}</Text>
        </TouchableOpacity>
    );
};

export default PopularCard;
