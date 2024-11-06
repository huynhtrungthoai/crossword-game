import axiosInstance from './axiosInstance';

interface IGetLocation {
  isAll?: boolean;
  keywords?: string;
}

const getAddress = async (params: IGetLocation) => {
  return (await axiosInstance.get('school', { params })).data;
};

const homeService = {
  getAddress,
};

export default homeService;
