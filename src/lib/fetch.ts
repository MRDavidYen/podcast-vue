import { rssFeedUrl } from "../const/url";
import parser from "xml2json";
import axios from "axios";

export const fetchRSS = async () => {
    let rssResult = await axios.get<string>(rssFeedUrl);
    let rssText = rssResult.data;
    let rssJson = parser.toJson(rssText);

    return rssJson;
}