import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import TitoView from './DefaultView';

const TitoBlockView = (props) => {
  const { data } = props;
  return <TitoView {...data} />;
};

export default withBlockExtensions(TitoBlockView);
