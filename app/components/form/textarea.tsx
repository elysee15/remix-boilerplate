import { useField } from "remix-validated-form";
import { Label } from "../ui/label";
import { ReactNode } from "react";
import { Textarea, TextareaProps } from "../ui/textarea";

type FormInputProps = TextareaProps & {
  name: string;
  label: ReactNode;
};

function TextAreaField({ name, label, ...rest }: FormInputProps) {
  const { getInputProps, error } = useField(name);

  return (
    <div>
      <Label htmlFor={name} className="mb-2 block">
        {label}
      </Label>
      <Textarea
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

export default TextAreaField;
