import http from "../../lib/http";
import {useQuery} from "@tanstack/react-query";

const searchJob = async (params) => {
    try {
        const res = await http.get('/Search', {
            params: {
                Page: 3,
                ResultsPerPage: 10,
                ...params,
            }
        })
        return res.data;
    } catch (e) {
        throw e
    }
}

export const useSearchJobQuery = ({
                                      PositionTitle,
                                  }) => {
    return useQuery({
        queryKey: ['/Search', PositionTitle],
        queryFn: () => searchJob({
            PositionTitle,
        }),
        enabled: !!PositionTitle,
    })
}



