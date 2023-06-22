import { Input } from "react-daisyui";
import FormItem, { FormItemProps } from "../form-item";
import { useFormProviderAsFormItem } from "../../../../providers/form/form-provider";
import { FormValues } from "../form";

export default function TextFormItem<T extends FormValues>({
  props,
  formItem,
}: FormItemProps<T>) {
  const { setValue, value } = useFormProviderAsFormItem(
    formItem.name.toString()
  );

  return (
    <FormItem {...formItem}>
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value ?? ""}
        type="text"
        {...props}
      />
    </FormItem>
  );
}
