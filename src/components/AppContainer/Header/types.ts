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
    session?: Session,
    successCallback?: () => void
  ) => void;
}

export interface HeaderProps
  extends HeaderComponentProps,
    HeaderReduxProps,
    HeaderActions {}
