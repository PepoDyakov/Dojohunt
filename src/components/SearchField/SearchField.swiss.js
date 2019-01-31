import { styleSheet } from 'swiss-react';
export default styleSheet('SearchField', {
  Wrapper: {
    backgroundColor: 'white',
    boxShadow:
      '0px 2px 10px rgba(21, 20, 26, 0.15), 0px 2px 2px rgba(41, 39, 51, 0.13)',
    _size: ['70%', '60px'],
    padding: '0 12px',
    borderRadius: '6px',
    marginRight: 'auto',
    _flex: ['row', 'between', 'center'],
    fontFamily: 'sans-serif',
    transition: '0.25s ease all',
  },

  IconWrapper: {
    _size: ['50%', '100%'],
    _flex: ['row', 'center', 'center'],
    padding: '25',
  },

  Icon: {
    _el: 'img',
    _size: '18px',
    marginLeft: 'auto',
    cursor: 'pointer',
  },

  Input: {
    _el: 'input',
    _size: ['100%', '45px'],
    _font: ['16px', '19px', '400'],
    border: 'none',
    paddingRight: '6px',
  },
});
