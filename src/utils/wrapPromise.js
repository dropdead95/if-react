import { hotelsAPI } from '../API';

const cache = new Map();

export const fetchData = (url, searchValue) => {
  if (!cache.has(url)) {
    cache.set(url, getData(url, searchValue));
  }
  return cache.get(url);
};

async function getData(url, searchValue) {
  if (url === 'hotels') {
    return await hotelsAPI.searchAvailableHotels(searchValue);
  } else {
    throw Error('Not implemented');
  }
}

export const wrapPromise = promise => {
  if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    promise.status = 'pending';
    promise.then(
      result => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      reason => {
        promise.status = 'rejected';
        promise.reason = reason;
      }
    );
    throw promise;
  }
};
