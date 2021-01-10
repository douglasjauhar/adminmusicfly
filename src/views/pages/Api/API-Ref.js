import axios from 'axios'
export const ALL_COUNTRY = async () => {
    const url = `https://restcountries.eu/rest/v2/all`;
    return await axios.get(url);
};

export const GET_TOKEN_MUSIC_STORY = async () => {
    const url = `http://api.music-story.com/oauth/request_token?oauth_consumer_key=5dbd01989f76148a51e147334e9c246ae2a78d61&oauth_signature=56480595675b1f467be4ecabbbc8e80d771b4546&""`;
    return await axios.get(url);
};

export const GENRES = async () => {
    const url = `http://api.music-story.com/en/genre/1/genres`;
    return await axios.get(url);
};