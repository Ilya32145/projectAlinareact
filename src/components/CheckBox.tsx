import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

const onChange: CheckboxProps['onChange'] = (e) => {
  return `checked = ${e.target.checked}`;
};

type CheckboxPropsType = {
  title: string;
};

export function CheckBox({ title }: CheckboxPropsType) {
  return <Checkbox onChange={onChange}>{title}</Checkbox>;
}
