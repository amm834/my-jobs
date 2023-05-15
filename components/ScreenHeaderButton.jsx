import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";

const ScreenHeaderButton = ({
                                icon,
                            }) => {
    return (
        <TouchableOpacity onPress={() => {
            console.log('hello world')
        }}>
            {icon}
        </TouchableOpacity>
    );
};

export default ScreenHeaderButton;
