import { Input } from "react-daisyui";
import FormItem, { FormItemProps } from "../form-item";
import { useFormProvider } from "../../../../providers/form/form-provider";

type Props = FormItemProps;

export default function TextFormItem({ props, formItem }: Props) {
  const { setValue, value } = useFormProvider(formItem.name);

  return (
    <FormItem {...formItem}>
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        {...props}
      />
    </FormItem>
  );
}
