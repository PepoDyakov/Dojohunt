import { styleSheet } from 'swiss-react';

export default styleSheet('MenuBarOption', {
  Wrapper: {
    _size: ['calc(100% - 36px)', '60px'],
    _flex: ['column', 'flex-start', 'flex-start'],
    _font: ['13px', '15px', '500'],
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
    borderRadius: '6px',
    marginBottom: '16px',
    padding: '0 10px',
    transition: '.2s ease',
    overflowY: 'hidden',

    'selected': {
      _size: ['calc(100% - 36px)', '180px'],
      overflowY: 'initial',
    },
  },

  Top: {
    _size: ['100%', '100%'],
    _flex: ['row', 'flex-start', 'center'],
    flexShrink: '0',
    
    selected: {
      _size: ['100%', '48px'],
      margin: '12px 0', 
    }
  },

  Option: {
    _el: 'p',
  },

  Logo: {
    _el: 'img',
    _size: '16px',
    marginRight: '12px',
  },

  Dropdown: {
    _el: 'button',
    _size: ['36px', '12px'],
    marginLeft: 'auto',
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },

  ContentWrapper: {
    _size: ['100%', '36px'],
    _flex: ['row', 'flex-start', 'center'],
  }
})
