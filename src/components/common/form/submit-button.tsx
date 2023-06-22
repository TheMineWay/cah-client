import { Button } from "react-daisyui";
import { useFormProvider } from "../../../providers/form/form-provider";

type Props = {
  text: string;
};

export default function SubmitButton({ text }: Props) {
  const {
    form: { isLoading },
  } = useFormProvider();

  return (
    <Button loading={isLoading} type="submit" color="primary">
      {text}
    </Button>
  );
}
