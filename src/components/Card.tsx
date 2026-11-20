import { Card as AntdCard } from 'antd';
import { Icon } from './Icon';
import { StarFilled } from '@ant-design/icons';

const { Meta } = AntdCard;

type CardProps = {
  title: string;
  image: string;
  subtitle: string;
  icon: string;
  created_at: string;
};

export default function antdCard({ title, image, subtitle }: CardProps) {
  return (
    <AntdCard
      hoverable
      variant="borderless"
      style={{ width: '70%', margin: '0 auto' }}
      cover={
        <img
          draggable={false}
          alt="example"
          src={image}
          style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '450px' }}
        />
      }
    >
      <Icon component={StarFilled} size={20} alt="Поиск" />
      <Meta title={title} description={subtitle} />{' '}
    </AntdCard>
  );
}
