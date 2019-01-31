import { styleSheet } from 'swiss-react';

export default styleSheet('Svg', {
  Wrapper: {
    _size: get => `${get('size', 24)}px`,
    _flex: ['column', 'center', 'center'],
    flex: 'none',

    '& > svg': {
      fill: get => `${get('color')}`,
    },
  },
});
