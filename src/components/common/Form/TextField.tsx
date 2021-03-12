import {
  StandardTextFieldProps,
  TextField,
  TextFieldProps,
} from "@material-ui/core";

interface AppTextFieldProps extends StandardTextFieldProps {
  formik?: any;
}

export default function AppTextField(props: AppTextFieldProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      margin="normal"
      label={"Default label" || props.label}
      value={props.value || props.formik?.values[props.name]}
      onChange={props.onChange || props.formik?.handleChange}
      error={
        props.error ||
        (props.formik?.touched[props.name] &&
          Boolean(props.formik?.errors[props.name]))
      }
      helperText={
        props.helperText ||
        (props.formik?.touched[props.name] && props.formik?.errors[props.name])
      }
      {...props}
    />
  );
}
