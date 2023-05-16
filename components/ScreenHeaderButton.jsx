import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";

const ScreenHeaderButton = ({
                                icon,
    onPress,
                            }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            {icon}
        </TouchableOpacity>
    );
};

export default ScreenHeaderButton;
