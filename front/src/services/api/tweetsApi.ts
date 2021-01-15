import axios from "axios";
import {Tweet, TweetsState} from "../../store/ducks/tweets/contracts/state";

export const TweetsApi = {
    async fetchTweets(): Promise<TweetsState['items']> {
        const { data } = await axios.get('/api/tweets')
        return  data;
    },
    async fetchTweetData(id: string): Promise<Tweet[]> {
        const { data } = await axios.get('/api/tweets/' + id)
        return data;
    },
    async addTweet(payload: Tweet): Promise<Tweet> {
        const { data } = await axios.post('/api/tweets', payload)
        return data;
    },
};