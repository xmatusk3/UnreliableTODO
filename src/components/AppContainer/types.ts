interface AppContainerActions {
  readonly getAllTodos: (successCallback: () => void) => void;
}

export interface AppContainerState {
  readonly isEditMode: boolean;
  readonly isLoadingInitialData: boolean;
}

export interface AppContainerProps extends AppContainerActions {}
