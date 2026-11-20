import { ConfigProvider, Input as InputAntd, Space } from 'antd';
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof InputAntd.Search>;

type InputProps = {
  title?: string;
};

const { Search } = InputAntd;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

export default function Input(props: InputProps) {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: 'rgb(179, 79, 145)' },
      }}
    >
      <Space vertical>
        <Search
          placeholder={props?.title}
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Space>
    </ConfigProvider>
  );
}
