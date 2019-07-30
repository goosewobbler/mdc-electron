import * as React from 'react';

import ExternalIcon from './icon/ExternalIcon';

interface ExternalLinkProps {
  black?: boolean;
  className?: string;
  color?: string;
  height?: string;
  label: string;
  link: string;
  padding?: string;
}

const ExternalLink = (props: ExternalLinkProps) => (
  <a className={props.className} href={props.link} target="_blank" onClick={event => event.stopPropagation()}>
    <div className="container">
      <ExternalIcon />
    </div>
    <span>{props.label}</span>
  </a>
);

export default ExternalLink;
