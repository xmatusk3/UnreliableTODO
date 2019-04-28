import { editSession } from "../../../actions";

export interface HeaderComponentProps {
  readonly onEditClick: () => void;
  readonly onDeleteClick: () => void;
}

export interface HeaderReduxProps {
  readonly sessionExists: boolean;
}

export interface HeaderActions {
  readonly editSession: typeof editSession;
}

export interface HeaderProps
  extends HeaderActions,
    HeaderComponentProps,
    HeaderReduxProps {}
