import { TextField, TextFieldProps } from "@material-ui/core";

export default function AppTextField(props: TextFieldProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      margin="normal"
      label={"Default label" || props.label}
      {...props}
    />
  );
}
