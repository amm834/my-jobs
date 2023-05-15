import http from "../lib/http";

export const searchJob = async () => {
    try {
        const res = await http.get('/search', {
            params: {
                query: 'Python developer in Texas, USA',
                page: '1',
                num_pages: '1'
            },
        })
        return res.data;
    } catch (e) {
        throw e
    }
}
