// @ts-ignore
import resolveConfig from 'tailwindcss/resolveConfig';
// @ts-ignore
import tailwindConfig from '../../../tailwind.config';

const styles = resolveConfig(tailwindConfig);

const getColorFromTailwindConfig = (colorVariable: string): string => {
  const tailwindRule = styles?.theme?.colors[colorVariable]?.default;

  if (!tailwindRule) {
    return '';
  }

  return tailwindRule.replace(/var\(([^)]+)\)/, (fullMatch: string, cssVar: string) =>
    getComputedStyle(document.documentElement)
      .getPropertyValue(cssVar)
      .trim(),
  );
};

export { getColorFromTailwindConfig };