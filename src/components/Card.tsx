import { Card as AntdCard } from 'antd';

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
      style={{ width: '70%' }}
      cover={
        <img
          draggable={false}
          alt="example"
          src={image}
          style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '450px' }}
        />
      }
    >
      <Meta title={title} description={subtitle} />
    </AntdCard>
  );
}
