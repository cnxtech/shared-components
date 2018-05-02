import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import userTextSpacing from 'extensions/userTextSpacing';

import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import H5 from './H5';

const H1 = styled.h1.withConfig({ displayName: 'H1' }).attrs({
  spacing: userTextSpacing,
})`
  color: ${get('colors.primary.default')};
  font-weight: 100;
  font-family: ${get('fonts.brand')};
  font-size: 2.5em;
  margin: ${props => props.spacing};
  overflow: hidden;
  padding: 0;
`;

H1.propTypes = {
  /**
   * Specify a CSS value or an object { top, right, bottom, left } to
   * control the spacing around the heading. Defaults to no space.
   */
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

H1.defaultProps = {
  spacing: null,
  className: null,
  id: null,
};

H1.H2 = H2;
H1.H3 = H3;
H1.H4 = H4;
H1.H5 = H5;

/**
 * @component
 */
export default H1;
