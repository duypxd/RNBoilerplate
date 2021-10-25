export const fontsName: any = {
  thin: 'Inter-Thin',
  regular: 'Inter-Regular',
  light: 'Inter-Light',
  medium: 'Inter-Medium',
  demiBold: 'Inter-SemiBold',
  bold: 'Inter-Bold',
};

export const sizes = {
  S8: 8,
  S10: 10,
  S12: 12,
  S14: 14,
  S16: 16,
  S17: 17,
  S18: 18,
  S20: 20,
  S24: 24,
  S28: 28,
  S30: 30,
  S36: 36,
  S40: 40,
};

const mapFontSize = (type: string) =>
  Object.values(sizes).reduce(
    (obj: any, size: number) => ({
      ...obj,
      [type + size]: {
        fontFamily: fontsName[type],
        fontSize: size,
        color: 'black',
      },
    }),
    {},
  );

export const FontType: any = {
  normal: {
    fontFamily: fontsName.regular,
    fontSize: sizes.S14,
    color: 'black',
  },
  ...mapFontSize('thin'),
  ...mapFontSize('regular'),
  ...mapFontSize('light'),
  ...mapFontSize('medium'),
  ...mapFontSize('demiBold'),
  ...mapFontSize('bold'),
};

export default FontType;
