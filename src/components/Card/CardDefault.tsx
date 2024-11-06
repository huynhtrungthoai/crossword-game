import { formatCurrency } from '@/utilities/Helpers';
import { Card, Skeleton, Typography } from 'antd';

const { Paragraph, Text } = Typography;

type Data = {
  id: string;
  date?: string;
  dateNumber?: string;
  title: string;
  code?: string;
  from?: string;
  price?: string;
  percentPromotion?: string;
  url: string;
};

interface IProps {
  data: Data;
  heightImage?: number;
  loading?: boolean;
  isHiddenBody: boolean;
  onClick: (value: string) => void;
}

const CardDefault: React.FC<IProps> = ({
  loading = false,
  data,
  heightImage = 140,
  isHiddenBody,
  onClick,
}: IProps) => {
  const styleSemi: React.CSSProperties = {
    color: '#AFAFAF',
    fontWeight: '400',
    height: '11px',
    lineHeight: '1',
    fontStyle: 'normal',
    letterSpacing: '1px',
    fontSize: '12px',
  };

  const stylePrice: React.CSSProperties = {
    fontWeight: 400,
    fontSize: '12px',
  };

  let bodyStyle: React.CSSProperties = {
    borderRadius: '0 0 16px 16px',
    overflow: 'hidden',
    padding: '12px',
  };

  if (isHiddenBody) {
    bodyStyle.display = 'none';
  }

  if (data?.percentPromotion) {
    stylePrice.textDecoration = 'line-through';
  }

  let title = data?.title;
  if (title.length > 60) {
    title = title.slice(0, 60).trim() + '...';
  }

  let code = data?.code;
  if (code && code.length > 15) {
    code = code.slice(0, 15).trim() + '...';
  }

  const isSkeletonImage: boolean = !data?.url || loading;

  return (
    <Card
      key={data?.id}
      id={data?.id}
      bordered={false}
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        height: '100%',
      }}
      onClick={() => onClick(data?.id)}
      cover={
        isSkeletonImage ? (
          <Skeleton.Image
            active={loading}
            style={{
              width: '245px',
              height: `${heightImage}px`,
            }}
          />
        ) : (
          <img
            alt="example"
            src={data?.url}
            style={{
              width: '245px',
              height: `${heightImage}px`,
              backgroundSize: 'cover',
            }}
          />
        )
      }
      bodyStyle={bodyStyle}
      loading={loading}
    >
      {!isHiddenBody && (
        <Typography style={{ fontSize: '12px' }}>
          <Text style={styleSemi}>{`${data?.date} - ${data?.dateNumber} ngày`}</Text>
          <Paragraph style={{ fontWeight: 600, margin: '5px 0' }}>{title}</Paragraph>
          <Paragraph style={{ margin: '0' }}>
            <Text style={styleSemi}>Mã Tour: </Text>
            <Text style={{ fontWeight: 400, fontSize: '12px' }}>{code}</Text>
          </Paragraph>
          <Paragraph style={{ margin: '0' }}>
            <Text style={styleSemi}>Nơi khởi hành: </Text>
            <Text style={{ fontWeight: 400, fontSize: '12px' }}>{data?.from}</Text>
          </Paragraph>
          <Paragraph
            style={{
              display: 'inline-flex',
              position: 'absolute',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '5px',
              bottom: 0,
            }}
          >
            <Paragraph style={{ margin: '0' }}>
              <Text style={styleSemi}>Giá: </Text>
              <Text style={stylePrice}>{formatCurrency(Number(data?.price), 'vi-VN')}</Text>
            </Paragraph>
            <Text
              style={{
                fontWeight: '600',
                color: '#F00',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                lineHeight: 'normal',
              }}
            >
              {data?.percentPromotion
                ? formatCurrency(
                    Number(data?.price) -
                      (Number(data?.price) * Number(data?.percentPromotion)) / 100,
                    'vi-VN'
                  )
                : ''}
            </Text>
          </Paragraph>
          {data?.percentPromotion && (
            <Text
              style={{
                display: 'inline-flex',
                fontSize: '12px',
                width: '65px',
                height: '30px',
                padding: '6px 4px 4px',
                borderRadius: '8px',
                background: '#EB3237',
                position: 'absolute',
                right: '12px',
                bottom: '18px',
                fontWeight: 500,
                color: '#FFFFFF',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >{`Giảm ${data?.percentPromotion}`}</Text>
          )}
        </Typography>
      )}
    </Card>
  );
};

export default CardDefault;
