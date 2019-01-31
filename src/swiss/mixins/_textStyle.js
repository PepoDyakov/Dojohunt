import { addMixin } from 'swiss-react';

addMixin('textStyle', (style = 'item') => {
  switch (style) {
    case 'body':
      return {
        _font: ['15px', '18px', 400],
        letterSpacing: '-0.3px',
      };
    default:
      console.warn(
        `unsupported textStyle: ${style}. Check _textStyle.js for support`,
      );
      return {
        _font: ['13px', '18px', 400],
        color: 'red', // TODO: Change color to swiss value
      };
  }
});
