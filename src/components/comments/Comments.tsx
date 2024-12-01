import Comment from 'components/comment';
import Wrapper from 'components/wrapper';
import { Pages } from 'enum/pages';
import { useAppSelector } from 'hooks/useAppSelector';
import { getComments } from 'selectors/commentSelectors';

const Comments = () => {
  const comments = useAppSelector(getComments);

  return (
    <Wrapper pageName={Pages.COMMENTS}>
      {comments.map(({ id, body, email, name }) => (
        <Comment key={id} title={name} body={body} email={email} />
      ))}
    </Wrapper>
  );
};

export default Comments;
