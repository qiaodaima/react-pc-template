import React, { FC } from 'react';
import S from './styles.less';

type CaptchaProps = {
  className?: string;
}

const Captcha: FC<CaptchaProps> = () => {
  return <div className={S.captcha}>验证码组件</div>;
};

export default Captcha;
