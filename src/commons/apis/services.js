import { RESAS_API_END_POINT } from './endPoint';
import { RESAS_API_KEY } from './apiKey';

async function getPrefectures(customConfig) {
  const config = {
    method: 'GET',
    headers: {
      'X-API-KEY': RESAS_API_KEY,
      //   'Content-Type': 'application/json;charset=UTF-8',
    },
    ...customConfig,
  };

  return fetch(`${RESAS_API_END_POINT}/api/v1/prefectures`, config).then(
    async (res) => {
      const data = await res.json();
      if (res.ok) return data.result;
      return Promise.reject(res);
    },
  );
}

export { getPrefectures };
