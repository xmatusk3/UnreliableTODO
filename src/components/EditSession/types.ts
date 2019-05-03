import { Session } from "../../actions/session/types";
import { Message } from "../../actions/message/types";

interface EditSessionComponentProps {
  readonly cancelCallback: () => void;
  readonly isAdding: boolean;
}

export interface EditSessionReduxProps {
  readonly session: Session;
}

export interface EditSessionActions {
  readonly editMessage: (message: Message) => void;
  readonly editSession: (
    session: Session,
    successCallback?: () => void
  ) => void;
  readonly addSession: (
    errorRate: number,
    displayName: string,
    successCallback?: () => void
  ) => void;
}

export interface EditSessionState {
  readonly errorRate: number;
  readonly displayName: string;
}

export interface EditSessionProps
  extends EditSessionComponentProps,
    EditSessionReduxProps,
    EditSessionActions {}
