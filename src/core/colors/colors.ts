export const colors = ((isLight = false): Record<string, string> => {
  const base = isLight
    ? {
        globalBg: '#fff',
        darkBg: '#efefef',
        textColor: '#282828',
      }
    : {
        globalBg: '#060815',
        darkBg: '#0c0f1f',
        textColor: '#fff',
      };
  return {
    ...base,
    accentBlue: 'blue',
    accentBlueHover: '#0000af',
    blockShadow: '0 37px 26px -25px rgba(0,0,0,.3)',
  };
})(localStorage.theme);
