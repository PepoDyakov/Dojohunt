import { styleSheet } from 'swiss-react';

export default styleSheet('MenuBar', {
  Wrapper: {
    _size: ['100%', '100%'],
    _flex: ['column', 'left', 'flex-start'],
    backgroundColor: '#F5F6FA',
    maxWidth: '500px',
  },

  Topbar: {
    _size: ['100%', '10%'],
    _flex: ['row', 'around', 'center'],
    maxHeight: '108px',
    backgroundColor: '#FFFFFF',
    marginBottom: '24px',
  },

  TopbarItem: {
    _size: ['auto', '100%'],
    _flex: ['column', 'center', 'center'],
    _font: ['16px', '19px', '400'],
    textAlign: 'center',
    borderBottom: '2px solid rgba(0, 0, 0, 0)',
    transition: '.2s ease all',

    '&:hover': {
      _size: ['auto', '100%'],
      borderBottom: '2px solid #F44336',
    },
  },

  OptionsWrapper: {
    _size: ['100%', 'auto'],
    _flex: ['column', 'center', 'flex-start'],
  },

  MoreOptions: {
    _el: 'p',
    _font: ['13px', '15px', '500'],
    marginTop: '16px',
    marginLeft: '18px',
    transition: '.2s ease all',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  LoginOptions: {
    _size: ['100%', 'auto'],
    _flex: ['row', 'center', 'center'],
    marginTop: 'auto',
    marginBottom: '32px',
  },

  LoginButton: {
    _el: 'button',
    _size: ['30%', '45px'],
    _flex: ['row', 'center', 'center'],
    _font: ['16px', '30px', '400'],
    maxWidth: '108px',
    borderRadius: '4px',
    border: '1px solid #4D4D4D',
    color: '#666666',
    marginRight: '16px',
    cursor: 'pointer',

    orange: {
      border: 'none',
      color: 'white',
      backgroundColor: '#F44336',
      marginRight: '0',
    },
  },
});
