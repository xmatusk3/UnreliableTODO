import { Session } from "../../actions/session/types";

interface EditSessionComponentProps {
  readonly cancelCallback: () => void;
}

interface EditSessionReduxProps {
  readonly session: Session;
}

interface EditSessionActions {
  readonly editSession: (
    session: Session,
    successCallback?: () => void
  ) => void;
}

export interface EditSessionState {
  readonly errorRate: number;
}

export interface EditSessionProps
  extends EditSessionComponentProps,
    EditSessionReduxProps,
    EditSessionActions {}
