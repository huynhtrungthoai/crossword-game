export interface TypeCrosswordData {
  id?: string;
  answer?: string;
  suggest1?: string;
  suggest2?: string;
  suggest3?: string;
  isShow: boolean;
  type?: string;
}

export const crosswordData = [
  {
    id: '1',
    answer: 'YSORAEN',
    suggest1: 'Ông nói dối',
    suggest2: 'Ông thông đồng với người khác phạm tội',
    suggest3: 'Ông vật lộn với Chúa',
    isShow: false,
    type: 'PEOPLE',
  },
  {
    id: '2',
    answer: 'PHIERO',
    suggest1: 'nói dối',
    suggest2: 'nóng nảy, hấp tấp',
    suggest3: 'Đá',
    isShow: false,
    type: 'PEOPLE',
  },
  {
    id: '3',
    answer: 'SALOMON',
    suggest1: 'Ban đầu ông khiêm nhường',
    suggest2: 'Giỏi',
    suggest3: 'Nhiều vợ, thờ hình tượng',
    isShow: false,
    type: 'PEOPLE',
  },
  {
    id: '4',
    answer: 'SAMSON',
    suggest1: 'Người được chọn',
    suggest2: 'Bị mù',
    suggest3: 'Tóc dài',
    isShow: false,
    type: 'PEOPLE',
  },
  {
    id: '5',
    answer: 'CAIN',
    suggest1: 'Bị đánh dấu',
    suggest2: 'Làm nông',
    suggest3: 'Giết người',
    isShow: false,
    type: 'PEOPLE',
  },
  {
    id: '6',
    answer: 'SINAI',
    suggest1: 'Một nơi bốc cháy',
    suggest2: 'Thời ông Môise',
    suggest3: 'Mười điều răn',
    isShow: false,
    type: 'LOCATION',
  },
  {
    id: '7',
    answer: 'SODOM',
    suggest1: 'Thương lượng với Chúa',
    suggest2: 'Phạm tội',
    suggest3: 'Bị huỷ diệt',
    isShow: false,
    type: 'LOCATION',
  },
  {
    id: '8',
    answer: 'BATMO',
    suggest1: 'Nhà tù',
    suggest2: 'Một trong các sứ đồ',
    suggest3: 'Những ngày cuối cùng',
    isShow: false,
    type: 'LOCATION',
  },
  {
    id: '9',
    answer: 'GOGOTHA',
    suggest1: 'Ở đó Chúa cầu nguyện',
    suggest2: 'Đông người',
    suggest3: 'Phỉ báng Chúa',
    isShow: false,
    type: 'LOCATION',
  },
  {
    id: '10',
    answer: 'EDEN',
    suggest1: 'Một nơi xinh đẹp',
    suggest2: 'Có vàng, nhũ hương, bích ngọc',
    suggest3: 'Cho con người',
    isShow: false,
    type: 'LOCATION',
  },
];
