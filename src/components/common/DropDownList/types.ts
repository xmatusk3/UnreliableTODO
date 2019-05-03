import { ChangeEvent } from "react";

export interface DropDownListProps {
  readonly valueTextMap: {
    readonly [key: string]: string;
  };
  readonly onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  readonly defaultValue?: string;
  readonly value: string;
}
