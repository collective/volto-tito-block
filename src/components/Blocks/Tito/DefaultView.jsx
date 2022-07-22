import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './tito.css';

const loadTiTo = (callback) => {
  const widgetId = 'TiTo';
  const scriptSrc = `https://js.tito.io/v1`;
  const existingScript = document.getElementById(widgetId);
  if (existingScript && callback) {
    callback(true);
  } else {
    if (callback) callback(false);
    window.titoWidgetCallback = function () {
      window.TitoWidget.build_widgets = false;
    };
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.id = widgetId;
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback(true);
    };
  }
};

const TitoView = (props) => {
  const { event, tickets, discountCode } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadTiTo(setLoaded);
    return () => {
      const wrapper = document.getElementById('tito-wrapper');
      if (wrapper) {
        const iframes = wrapper.querySelectorAll('iframe');
        iframes.forEach((element) => {
          element.remove();
        });
      }
    };
  }, [loaded]);

  useEffect(() => {
    if (loaded && typeof window !== 'undefined') {
      window.TitoWidget.buildWidgets();
    }
  }, [loaded, event, tickets, discountCode]);

  return (
    <div id={'tito-wrapper'}>
      {loaded && (
        <tito-widget
          event={event}
          releases={tickets}
          discount-code={discountCode}
        ></tito-widget>
      )}
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
TitoView.propTypes = {
  event: PropTypes.string.isRequired,
  tickets: PropTypes.string.isRequired,
  discountCode: PropTypes.string.isRequired,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
TitoView.defaultProps = {
  event: '',
  tickets: '',
  discountCode: '',
};

export default TitoView;
