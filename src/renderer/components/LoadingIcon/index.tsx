import * as React from 'react';
import { useTailwindColorResolver } from '../../helpers/stylesHelper';

const LoadingIcon = (): React.ReactElement => {
  const fillColor = useTailwindColorResolver('primary-text');
  return (
    <div className="w-full h-full spinner animate-spin">
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill={fillColor}>
        <path d="M29.8 8l-3.5 2c1 1.8 1.6 3.8 1.6 6 0 6.6-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4V0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16c0-2.9-.8-5.6-2.2-8z" />
      </svg>
    </div>
  );
};

export { LoadingIcon };
