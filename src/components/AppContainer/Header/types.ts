import { editSession } from "../../../actions";
import { Session } from "../../../actions/session/types";

export interface HeaderComponentProps {
  readonly onEditClick: () => void;
  readonly onDeleteClick: () => void;
}

export interface HeaderReduxProps {
  readonly sessionExists: boolean;
}

export interface HeaderActions {
  readonly editSession: (
    successCallback: () => void,
    session?: Session
  ) => void;
}

export interface HeaderProps
  extends HeaderActions,
    HeaderComponentProps,
    HeaderReduxProps {}
