import React, {useCallback, useMemo, useState} from 'react';
import {Stack, useRouter} from "expo-router";
import colors from "../../styles/colors";
import ScreenHeaderButton from "../../components/ScreenHeaderButton";
import {ArrowLeftIcon, HeartIcon, MapPinIcon, ShareIcon} from "react-native-heroicons/outline";
import {FlatList, Image, RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useSearchJobQuery} from "../../features/search/queries";
import fonts from "../../styles/fonts";
import {Linking} from "react-native";

const tabList = [
    {
        id: 'about',
        name: 'About',
        isActive: true,
    },
    {
        id: 'requirements',
        name: 'Requirements',
        isActive: false,
    },
    {
        id: 'duty',
        name: 'Responsibility',
        isActive: false,
    }
]
const BlogPostById = () => {
    const router = useRouter()
    const {data, isSuccess, isLoading, refetch} = useSearchJobQuery({
        PositionTitle: 'Software Engineer'
    })

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await refetch()
        setRefreshing(false)
    }, []);


    const [tabs, setTabs] = useState(tabList)
    const [activeTab, setActiveTab] = useMemo(() => {
        return tabs.filter(tab => tab.isActive)
    }, [tabs])

    const renderTabByTabId = (tab) => {
        switch (tab.id) {
            case 'about':
                return <View style={{
                    paddingHorizontal: 10,
                    marginTop: 15,
                }}>
                    <Text style={{
                        color: colors.gray800,
                        fontWeight: 'bold',
                        fontSize: fonts.lg,
                    }}>About</Text>
                    <Text style={{
                        marginTop: 10,
                        lineHeight: 19,
                        color: colors.gray800,
                    }}
                    >
                        90 Seconds's mission is to allow people to create fast, affordable video content anywhere on the
                        planet. 90 Seconds strips back the complexity of video production, giving brands and agencies
                        access to a marketplace of creatives, and an automated, end-to-end suite of workflow tools.
                        Backed by Sequoia Capital, we are on a hyper growth trajectory and we are looking for a
                        high-energy, passionate, and enthusiastic engineers to join our journey!
                    </Text>
                </View>
            case 'requirements':
                return <View style={{
                    paddingHorizontal: 10,
                    marginTop: 15,
                }}>
                    <Text style={{
                        color: colors.gray800,
                        fontWeight: 'bold',
                        fontSize: fonts.lg,
                    }}>Requirements</Text>
                    <Text
                        style={{
                            marginTop: 10,
                            lineHeight: 19,
                            color: colors.gray800,
                        }}
                    >
                        7+ years of working experience on both web and backend software engineering with Ruby on
                        Rails{"\n"}

                        Experience with Javascript, and familiarity with React.js a plus! {"\n"}

                        Familiar with Google Cloud Platform{"\n"}

                        Familiarity with RESTful/GraphQL would be a plus{"\n"}

                        Familiarity with Jest/RSpec would be a plus{"\n"}

                        Familiarity with NightwatchJS/WebDriver/Cypress would be a plus{"\n"}

                        B.S. in Computer Science or equivalent experience{"\n"}

                        You must be able to show some of your work! i.e. Github or current production applications{"\n"}

                        Thrive in a fast-paced iterative development environment{"\n"}

                        Ability to be self-managed and work in a geographically dispersed team{"\n"}
                    </Text>
                </View>
            case 'duty':
                return <View style={{
                    paddingHorizontal: 10,
                    marginTop: 15,
                }}>
                    <Text style={{
                        color: colors.gray800,
                        fontWeight: 'bold',
                        fontSize: fonts.lg,
                    }}>Responsibility</Text>
                    <Text style={{
                        marginTop: 10,
                        lineHeight: 19,
                        color: colors.gray800,
                    }}
                    >
                        Build features from backend to web apps {"\n"}

                        Ensure code quality by writing unit tests{"\n"}

                        Ensure feature quality by writing e2e tests{"\n"}

                        Responsible for system stability{"\n"}

                        Review code and mentor junior members{"\n"}

                        Review architecture design and provide suggestions {"\n"}
                    </Text>
                </View>
        }
    }

    function onTabClick(selectedTab) {
        setTabs(tabs => tabs.map(tab => {
            if (tab.id === selectedTab.id) {
                return {
                    ...tab,
                    isActive: true,
                }
            }
            return {
                ...tab,
                isActive: false,
            }
        }))
    }

    async function applyForJob() {
        await Linking.openURL('https://myanmarcyberyouths.vercel.app/')
    }

    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: colors.white,}}
        >
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: colors.primary,
                    },
                    headerShadowVisible: false,
                    headerLeft: () => <ScreenHeaderButton
                        icon={<ArrowLeftIcon color={colors.gray}/>}
                        onPress={() => router.back()}
                    />,
                    headerRight: () => <ScreenHeaderButton
                        icon={<ShareIcon color={colors.black}
                        />}/>,
                    headerTitle: "",
                }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
            >
                <View style={{
                    flex: 1,
                    padding: 10,
                }}>
                    <View style={{
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity>
                            <Image
                                source={{
                                    uri: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                                }}
                                resizeMode={'contain'}
                                style={{
                                    width: 100,
                                    height: 100,
                                }}
                            />
                        </TouchableOpacity>
                        <Text
                            style={{
                                color: colors.gray800,
                                fontSize: fonts.xl,
                                fontWeight: 500,
                            }}>Senior React Dev</Text>
                        <Text
                            style={{
                                color: colors.gray700,
                                marginTop: 5,
                                display: 'flex',
                                alignItems: "center"
                            }}
                        >
                            Myanmar Cyber Youths /
                            {" "}
                            <MapPinIcon
                                color={colors.black}
                                width={13}
                                height={13}
                            /> USA
                        </Text>
                    </View>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 18,
                }}>
                    <FlatList
                        horizontal={true}
                        contentContainerStyle={{
                            columnGap: 8,
                        }}
                        data={tabs}
                        renderItem={({item: tab}) => {
                            return <TouchableOpacity
                                key={tab.id}
                                style={{
                                    backgroundColor: tab.isActive
                                        ? colors.indigo500
                                        : colors.indigo300,
                                    paddingHorizontal: 14,
                                    paddingVertical: 8,
                                    borderRadius: 8,
                                }}
                                onPress={() => onTabClick(tab)}
                            >
                                <Text style={{
                                    color: colors.white,
                                }}>{tab.name}</Text>
                            </TouchableOpacity>
                        }}/>
                </View>
                <View>{renderTabByTabId(activeTab)}</View>
            </ScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 16,
                    paddingVertical:14,
                    columnGap:10,
                }}
            >
                <TouchableOpacity
                    style={{
                        borderRadius: 10,
                        borderWidth: 1,
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        borderColor: colors.pink600,
                    }}>
                    <HeartIcon color={colors.pink600}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: colors.pink600,
                        paddingHorizontal: 10,
                        paddingVertical: 14,
                        borderRadius: 10,
                    }}
                    onPress={applyForJob}
                >
                    <Text
                        style={{
                            color: colors.white,
                            fontWeight: 'bold',
                            textAlign:'center',
                        }}>Apply for job</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default BlogPostById;
