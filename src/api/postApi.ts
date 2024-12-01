import { TPost, TPosts, TPostInfo } from 'types';
import { BASE_API } from 'const/api';

export const getAllPosts = async (): Promise<TPosts> => {
  try {
    const res = await fetch(`${BASE_API}/posts`, {
      method: 'GET',
    });

    if (res.ok) {
      return res.json();
    }

    throw new Error('Ошибка получения постов');
  } catch (e) {
    throw e;
  }
};

export const getPost = async (id: number): Promise<TPost> => {
  try {
    const res = await fetch(`${BASE_API}/posts${id}`, {
      method: 'GET',
    });

    if (res.ok) {
      return res.json();
    }

    throw new Error('Ошибка получения поста');
  } catch (e) {
    throw e;
  }
};

export const editPostApi = async (
  postInfo: TPostInfo,
  id: number
): Promise<TPost> => {
  try {
    const res = await fetch(`${BASE_API}/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...postInfo,
        id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (res.ok) {
      return res.json();
    }

    throw new Error('Ошибка редактирования поста');
  } catch (e) {
    throw e;
  }
};

export const deletePostApi = async (id: number): Promise<void> => {
  try {
    await fetch(`${BASE_API}/posts${id}`, {
      method: 'DELETE',
    });
  } catch (e) {
    throw e;
  }
};

export const createPostApi = async (postInfo: TPostInfo): Promise<TPost> => {
  try {
    const res = await fetch(`${BASE_API}/posts`, {
      method: 'POST',
      body: JSON.stringify(postInfo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (res.ok) {
      return res.json();
    }

    throw new Error('Ошибка создания поста');
  } catch (e) {
    throw e;
  }
};
