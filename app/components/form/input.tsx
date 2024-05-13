import { useField } from "remix-validated-form";
import { Input, InputProps } from "../ui/input";
import { Label } from "../ui/label";
import { ReactNode } from "react";

type FormInputProps = InputProps & {
  name: string;
  label: ReactNode;
};

function InputField({ name, label, ...rest }: FormInputProps) {
  const { getInputProps, error } = useField(name);

  return (
    <div>
      <Label htmlFor={name} className="mb-2 block">
        {label}
      </Label>
      <Input
        {...rest}
        {...getInputProps({ id: name })}
        aria-invalid={!!error}
        aria-errormessage={error}
      />
      {error && (
        <p role="alert" className="text-xs text-destructive">
          {error ? error : null}
        </p>
      )}
    </div>
  );
}

export default InputField;
