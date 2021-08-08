/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const heights = {
  small: '10px',
  medium: '20px',
  large: '30px'
};

const getBarBorderRadius = (value) => {
  if (value === 100) {
    return '4px';
  }

  if (value >= 99.8) {
    return '2px';
  }

  return '0';
};

const ProgressBar = ({ value, size }) => {
  return <Outer size={size}>
    <Bar role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" value={value}></Bar>
  </Outer>
};

const Outer = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  padding: ${p => p.size === 'large' ? '4px' : 0};
  width: 500px;
  height: ${p => heights[p.size]};
`
const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: ${p => getBarBorderRadius(p.value)};
  width: ${p => p.value}%;
  height: 100%;
`

export default ProgressBar;
