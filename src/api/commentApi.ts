import { TComments } from 'types';
import { BASE_API } from 'const/api';

export const getPostComments = async (id: number): Promise<TComments> => {
  try {
    const res = await fetch(`${BASE_API}/posts/${id}/comments`, {
      method: 'GET',
    });

    if (res.ok) {
      return res.json();
    }

    throw new Error('Ошибка получения комментариев поста');
  } catch (e) {
    throw e;
  }
};
