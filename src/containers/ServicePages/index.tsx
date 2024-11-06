import ButtonPrimary from '@/components/Button/ButtonPrimary';
import InputField from '@/components/Form-control/InputField';
import SearchField from '@/components/Form-control/SearchField';
import { yupResolver } from '@hookform/resolvers/yup';
import { Col, Row, Typography } from 'antd';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import styles from './style.module.scss';

interface IProps {}

type FormValues = {
  username: string;
  password: string;
  search: string;
};

const defaultValues: FormValues = {
  username: '',
  password: '',
  search: '',
};

const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  search: yup.string().required('ASDASDASDASDASDASD'),
});

const ServicePage: React.FC<IProps> = (props: IProps) => {
  const { control, handleSubmit, reset, getValues, register } = useForm<FormValues>({
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: useMemo(() => defaultValues, []),
  });

  const onSubmit = (event: any) => {
    console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 event: ', event);
  };
  return (
    <div style={{ height: '100vh', width: '800px', paddingTop: '1rem' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className={`${styles.rowForm}`}>
          <Typography.Text className={styles.textInput}>Username:</Typography.Text>
          <Col className={styles.colInput}>
            <InputField placeholder="Enter your username" control={control} name={'username'} />
          </Col>
        </Row>
        <Row className={`${styles.rowForm}`}>
          <Typography.Text className={styles.textInput}>Password:</Typography.Text>
          <Col className={styles.colInput}>
            <InputField placeholder="Enter your password" control={control} name={'password'} />
          </Col>
        </Row>
        <Row className={`${styles.rowForm}`}>
          <Typography.Text className={styles.textInput}>Search:</Typography.Text>
          <Col className={styles.colInput}>
            <SearchField control={control} name="search" placeholder="Search Here" />
          </Col>
        </Row>
        <Row>
          <ButtonPrimary onClick={handleSubmit} text="Submit" />
        </Row>
      </form>
    </div>
  );
};

export default ServicePage;
