import axios from "axios";
import {TagsState} from "../../store/ducks/tags/contracts/state";

export const TagsApi = {
    async fetchTags(): Promise<TagsState['items']> {
        const { data } = await axios.get('/api/themes');
        return data;
    },
};