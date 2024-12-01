import { useState } from 'react';
import {
  Button,
  Card,
  Container,
  CardActions,
  CardContent,
  TextareaAutosize,
  Typography,
  Modal as ModalWindow,
} from '@mui/material';
import { TPostInfo } from 'types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface IModalProps {
  onCloseModal: () => void;
  onSubmitHandler: (post: TPostInfo) => void;
  open: boolean;
  isTextAreaEnabled: boolean;
  text: string;
  initialTextValue?: {
    body: string;
    title: string;
  };
}

const Modal: React.FC<IModalProps> = ({
  open,
  onCloseModal,
  onSubmitHandler,
  isTextAreaEnabled,
  text,
  initialTextValue,
}) => {
  const [titleText, setTitleText] = useState<string>(
    initialTextValue?.title ?? ''
  );
  const [contentText, setContentText] = useState<string>(
    initialTextValue?.body ?? ''
  );

  const onChangeTitleTextHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setTitleText(event.target.value);
  };

  const onChangeContentTextHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setContentText(event.target.value);
  };

  const onSubmit = (): void => {
    onSubmitHandler({
      title: titleText,
      body: contentText,
      userId: 1,
    });
  };

  return (
    <ModalWindow open={open} onClose={onCloseModal}>
      <Card sx={style}>
        <CardContent>
          <Typography
            sx={{ paddingLeft: '24px' }}
            variant="h5"
            fontWeight="700"
          >
            Are you sure you want to {text} post?
          </Typography>
          {isTextAreaEnabled ? (
            <Container
              sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <TextareaAutosize
                minRows={2}
                value={titleText}
                onChange={onChangeTitleTextHandler}
                placeholder="title"
              />
              <TextareaAutosize
                minRows={4}
                value={contentText}
                onChange={onChangeContentTextHandler}
                placeholder="content"
              />
            </Container>
          ) : null}
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button onClick={onSubmit} sx={{ marginRight: 2 }} variant="outlined">
            Yes
          </Button>
          <Button onClick={onCloseModal} variant="outlined">
            No
          </Button>
        </CardActions>
      </Card>
    </ModalWindow>
  );
};

export default Modal;
