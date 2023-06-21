import { Button } from "react-daisyui";

type Props = {
  text: string;
};

export default function SubmitButton({ text }: Props) {
  return (
    <Button type="submit" color="primary">
      {text}
    </Button>
  );
}
