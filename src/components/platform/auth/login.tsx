import { useForm } from "../../../hooks/common/form/use-form";
import Form from "../../common/form/form";
import TextFormItem from "../../common/form/items/text-form-item";

export default function Login() {
  const form = useForm<FormValues>();

  return (
    <Form form={form}>
      <TextFormItem<FormValues> formItem={{ name: "nick" }} />
    </Form>
  );
}

class FormValues {
  nick!: string;
  password!: string;
}
