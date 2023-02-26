type Device = {
  mobile: boolean; // 移动设备  手机、平板
  weChat: boolean; // 微信
  pc: boolean; // pc
  android: boolean; // 安卓
  iPhone: boolean; // 苹果手机
};

// 是不是微信环境
const weChat = () => {
  const ua = navigator.userAgent.toLowerCase();

  return ua.includes('micromessenger');
};

// 是不是安卓
const android = () => {
  const ua = navigator.userAgent;

  return ua.includes('Android') || ua.includes('Adr');
};

// 是不是苹果手机  不包含平板
const iPhone = () => {
  const ua = navigator.userAgent;

  return ua.includes('iPhone') && !ua.includes('ipad');
};

// 是不是移动设备
const mobile = () => {
  return 'ontouchstart' in document.documentElement;
};

// 是不是PC
const pc = () => {
  return !isMobile();
};

const device: Device = {
  mobile: mobile(),
  weChat: weChat(),
  pc: pc(),
  android: android(),
  iPhone: iPhone(),
};

export default device;
