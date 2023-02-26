import { defineMock } from 'umi';

export default defineMock({
  'GET /api/v1/login': (req, res) => {
    res.status(200).json({
      code: 200,
      message: 'success',
      data: {
        name: '全村的希望-/api/v1/login',
        token: 'tokentoken',
        avatar: '',
      },
    });
  },
  'GET /api/v1/outLogin': (req, res) => {
    res.status(200).json({
      code: 200,
      message: 'success',
      data: {
        name: '全村的希望-/api/v1/outLogin',
        token: 'tokentoken',
        avatar: '',
      },
    });
  },
  'GET /api/v1/users/detail': (req, res) => {
    res.status(200).json({
      code: 200,
      message: 'success',
      data: {
        name: '全村的希望-/api/v1/users/detail',
        token: 'tokentoken',
        avatar: '',
      },
    });
  }
});
