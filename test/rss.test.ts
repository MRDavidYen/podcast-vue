import { fetchRSS } from "../src/lib/fetch"

test("fetch rss file",async () => {
    let rssResult = await fetchRSS();
    console.log(rssResult);
    
    expect(rssResult).toBeDefined();
});