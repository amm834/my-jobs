import React from 'react';
import {Stack} from "expo-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
});

const _Layout = () => {
    return (
        <QueryClientProvider client={queryClient}>
                <Stack/>
        </QueryClientProvider>
    );
};

export default _Layout;
