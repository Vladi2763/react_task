export type TPost = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type TPostInfo = Omit<TPost, 'id'>;

export type TPosts = TPost[];

export type TComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type TComments = TComment[];
