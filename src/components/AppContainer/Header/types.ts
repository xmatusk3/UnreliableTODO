export interface HeaderComponentProps {
  readonly onEditClick: () => void;
}

export interface HeaderReduxProps {
  readonly sessionExists: boolean;
}

export interface HeaderProps extends HeaderComponentProps, HeaderReduxProps {}
