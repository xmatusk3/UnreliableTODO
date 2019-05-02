export interface ItemActionsProps {
  readonly editTitle?: string;
  readonly completeTitle?: string;
  readonly deleteTitle?: string;
  readonly editCallback?: Function;
  readonly completeCallback?: Function;
  readonly deleteCallback?: Function;
}
