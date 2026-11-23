import { Card as AntdCard } from 'antd';
import { Icon } from './Icon';
import { StarFilled } from '@ant-design/icons';
import type { Card } from '../shared/types/Card';

const { Meta } = AntdCard;

export default function antdCard({ title, image, subtitle }: Card) {
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
