import { useForm } from "../../../hooks/common/form/use-form";
import Form from "../../common/form/form";
import TextFormItem from "../../common/form/items/text-form-item";

export default function Login() {
  const form = useForm<FormModel>();

  return (
    <Form form={form}>
      <TextFormItem<FormModel> formItem={{ name: "nick" }} />
    </Form>
  );
}

class FormModel {
  nick!: string;
  password!: string;
}
