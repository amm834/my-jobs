import React from 'react';
import {Text} from 'react-native';
import {useRouter, useSearchParams} from "expo-router";

const BlogPostById = () => {
    const router = useRouter()
    const params  = useSearchParams()

    return (
        <Text>
            Job {params.id}
        </Text>
    );
};

export default BlogPostById;
