import Card from 'components/card';

interface ICommentProps {
  title: string;
  body: string;
  email: string;
}

const Comment: React.FC<ICommentProps> = ({ title, body, email }) => {
  return (
    <>
      <Card title={title} body={body} email={email} />
    </>
  );
};

export default Comment;
