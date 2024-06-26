import {CSSProperties} from '@workday/canvas-kit-react/tokens';

/**
 * A utility to visually hide content, while still making accessible to screenreaders
 * See https://a11y-101.com/development/skip-link
 */
export const accessibleHide: CSSProperties = {
  clip: 'rect(1px, 1px, 1px, 1px)', // Deprecated but still used by most browsers, clip-path will be taking its place soon.
  clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)',
  position: 'absolute',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  height: '1px',
  width: '1px',
  margin: '-1px',
  padding: 0,
  border: 0,
};
