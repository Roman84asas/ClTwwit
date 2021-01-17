import { axios } from "../../core/axois";
import {Tweet, TweetsState} from "../../store/ducks/tweets/contracts/state";

interface Response<T> {
    status: string,
    data: T
}

export const TweetsApi = {
    async fetchTweets(): Promise<Response<TweetsState[]>> {
        const { data } = await axios.get('/api/tweets');
        return  data.data;
    },
    async fetchTweetData(id: string): Promise<Tweet> {
        const { data } = await axios.get<Response<Tweet>>('/api/tweets/' + id);
        return data.data;
    },
    async addTweet(payload: string): Promise<Tweet> {
        const { data } = await axios.post<Response<Tweet>>('/api/tweets', {text: payload});
        return data.data;
    },
};