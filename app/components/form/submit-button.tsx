import { useIsSubmitting } from "remix-validated-form";
import { Button, ButtonProps } from "../ui/button";
import { PropsWithChildren } from "react";
import { Loader2 } from "lucide-react";

function SubmitButton({ children, ...props }: PropsWithChildren<ButtonProps>) {
  const isSubmitting = useIsSubmitting();

  return (
    <Button {...props} type="submit" disabled={isSubmitting}>
      {isSubmitting ? (
        <span>
          <Loader2 className="animate-spin" />
        </span>
      ) : (
        children
      )}
    </Button>
  );
}

export default SubmitButton;
