export interface ISelectInputOption {
  label: string;
  value: any;
}

export interface ISelectInput {
  iconUri?: string;
  icon?: React.ReactNode;
  onChange: (e: string | number) => void;
  placeholder?: string;
  modalPlaceHolder: string;
  defaultValue?: ISelectInputOption;
  errorMessage?: string;
  options: ISelectInputOption[];
}
