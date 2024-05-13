import { ValidatedForm } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import InputField from "../form/input";
import SubmitButton from "../form/submit-button";
import TextAreaField from "../form/textarea";

const validator = withZod(z.object({}));

function JoinUsForm() {
  return (
    <div className="w-full max-w-[500px]">
      <ValidatedForm validator={validator} method="post" className="grid gap-8">
        <InputField label="Your fullname" name="fullname" placeholder="Email" />
        <InputField
          label="Your email address"
          name="email"
          type="email"
          placeholder="Your email address"
        />
        <TextAreaField
          label="What's your expertise ?"
          name="expertise"
          placeholder="What's your expertise ?"
          rows={10}
        />
        <SubmitButton className="bg-[#4F30E5]">Send</SubmitButton>
      </ValidatedForm>
    </div>
  );
}

export default JoinUsForm;
