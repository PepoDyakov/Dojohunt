import { styleSheet } from 'swiss-react';

export default styleSheet('Home', {
  Container: {
    _size: '100%',
    _flex: ['row', 'center', 'flex-start'],
  },

  MapWrapper: {
    // _size: ['calc(100% - 500px)', '100%'],
    _size: '100%',
    _flex: ['column', 'center', 'flex-start'],
    backgroundColor: 'black',
    position: 'relative',
  },

  TopBar: {
    _size: ['50%', 'auto'],
    _flex: ['row', 'flex-start', 'center'],
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: "24px",
    zIndex: '999',
  },

  Logo: {
    _el: 'img',
    _size: '48px',
    marginRight: '36px',
  },

  Map: {
    _size: '100%',
  }
})