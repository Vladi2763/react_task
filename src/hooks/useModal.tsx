import { useState, useMemo, useCallback } from 'react';
import { TPostInfo } from 'types';
import Modal from 'components/modal';
import { Operations } from 'enum/operations';

interface IUseModalProps {
  text: string;
  initialTextValue?: {
    body: string;
    title: string;
  };
  submitHandler?: (post: TPostInfo) => void;
}

interface IReturnValue {
  setIsOpen: (val: boolean) => void;
  Dialog: () => JSX.Element;
}

export const useModal = ({
  text,
  submitHandler,
  initialTextValue,
}: IUseModalProps): IReturnValue => {
  const [open, setIsOpen] = useState<boolean>(false);

  const isTextAreaEnabled = useMemo(
    () => text === Operations.EDIT || text === Operations.CREATE,
    [text]
  );

  const onSubmitHandler = (post: TPostInfo): void => {
    submitHandler?.(post);
  };

  const onCloseHandler = (): void => setIsOpen(false);

  const Dialog = useCallback(
    () =>
      open ? (
        <Modal
          open={open}
          isTextAreaEnabled={isTextAreaEnabled}
          onSubmitHandler={onSubmitHandler}
          onCloseModal={onCloseHandler}
          text={text}
          initialTextValue={initialTextValue}
        />
      ) : (
        <></>
      ),
    [open]
  );

  return { setIsOpen, Dialog };
};
