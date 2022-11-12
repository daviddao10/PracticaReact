import client from '../api/client';

const AdvertsUrl = '/api/v1/adverts';

export const getLatestTweets = () => {
  const url = `${AdvertsUrl}?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`;
  return client.get(url);
};

export const getTweetDetail = AdvertsId => {
  const url = `${AdvertsUrl}/${AdvertsId}`;
  return client.get(url);
};

export const createTweet = adverst => {
  const url = AdvertsUrl;
  return client.post(url, adverst);
};
