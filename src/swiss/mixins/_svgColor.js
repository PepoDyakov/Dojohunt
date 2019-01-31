import { addMixin } from 'swiss-react';

addMixin('svgColor', (props, fill = null, stroke = null) => ({
  fill,
  stroke: stroke || fill,
}));
