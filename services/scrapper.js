import { google } from "googleapis";
import { API_KEY } from "../utils/constants.js";

const youtube = google.youtube({
  version: "v3",
  auth: API_KEY,
});

export const scrapper = async (id) => {
  const playlistItems = [];
  console.log("Getting playlist items from ${id}");
  let nextPageToken = null;
  do {
    const response = await youtube.playlistItems.list({
      part: "snippet",
      playlistId: id,
      maxResults: 50,
      pageToken: nextPageToken,
    });
    response.data.items.forEach((item) => {
      playlistItems.push({
        id: item.snippet.position + 1,
        title: item.snippet.title,
        url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
      });
    });

    nextPageToken = response.data.nextPageToken;
  } while (nextPageToken);

  console.log(`Finished getting playlist items from ${id}`);

  return playlistItems;
};
