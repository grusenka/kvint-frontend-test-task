const defaultTheme = require('antd/dist/default-theme');

const merge = require('lodash/merge');

const COLOR_BLACK = '#0e0e0e';

const SWITCH_COLOR = '#0f213c';
const SWITCH_BG = '#919191';
const SWITCH_HEIGHT = '17px';
const SWITCH_MIN_WIDTH = '36px';

module.exports = merge(defaultTheme, {
  black: COLOR_BLACK,

  'switch-color': SWITCH_COLOR,
  'switch-bg': SWITCH_BG,
  'switch-height': SWITCH_HEIGHT,
  'switch-min-width': SWITCH_MIN_WIDTH,
  'switch-shadow-color': 'none',
});
