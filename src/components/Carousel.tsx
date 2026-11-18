import { Carousel as AntdCarousel } from 'antd';
import Card from './Card';
import data from '../data.json';

export function Carousel() {
  return (
    <AntdCarousel arrows infinite={false} slidesToShow={3} dots={false}>
      {data.map((el, index) => (
        <div key={index}>
          <Card {...el} />
        </div>
      ))}
    </AntdCarousel>
  );
}
