import { editSession } from "../../actions";
import { Session } from "../../actions/session/types";

interface EditSessionComponentProps {
  readonly cancelCallback: () => void;
}

interface EditSessionReduxProps {
  readonly session: Session;
}

interface EditSessionActions {
  readonly editSession: typeof editSession;
}

export interface EditSessionState {
  readonly errorRate: number;
}

export interface EditSessionProps
  extends EditSessionComponentProps,
    EditSessionReduxProps,
    EditSessionActions {}
