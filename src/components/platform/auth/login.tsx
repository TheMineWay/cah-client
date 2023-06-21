import { useForm } from "../../../hooks/common/form/use-form";
import Form from "../../common/form/form";

export default function Login() {
  const form = useForm<FormValues>();

  return (
    <Form form={form}>
      <></>
    </Form>
  );
}

class FormValues {
  nick!: string;
  password!: string;
}
