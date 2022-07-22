import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import titoSVG from '@plone-collective/volto-tito-block/icons/tito.svg';
import aheadSVG from '@plone/volto/icons/ahead.svg';
import clearSVG from '@plone/volto/icons/clear.svg';
import { Icon } from '@plone/volto/components';
import { Button, Input, Header, Message } from 'semantic-ui-react';
import './EditForm.css';

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed a Ticket Form',
    defaultMessage: 'Embed a Ticket Form',
  },
  editFormPlaceholder: {
    id: 'Provide the event i.e. plone/conference-2022',
    defaultMessage: 'Provide the event i.e. plone/conference-2022',
  },
  errorMessage: {
    id: 'Please provide a valid event id',
    defaultMessage: 'Please provide a valid event id',
  },
});

const EditForm = (props) => {
  const {
    value,
    onChange,
    onKeyDown,
    onSubmit,
    onCancel,
    invalidValue,
  } = props;
  const intl = useIntl();
  const error = invalidValue ? intl.formatMessage(messages.errorMessage) : null;
  return (
    <Message className="">
      <center>
        <Icon
          name={titoSVG}
          className="blockIcon"
          size={'50px'}
          color={'blue'}
        />
        <Header>{intl.formatMessage(messages.editFormHeader)}</Header>
      </center>
      <div className="input-wrapper">
        <Input
          error={error}
          onKeyDown={onKeyDown}
          onChange={onChange}
          placeholder={intl.formatMessage(messages.editFormPlaceholder)}
          value={value}
        />
        {value && (
          <Button.Group>
            <Button
              basic
              className="cancel"
              onClick={(e) => {
                e.stopPropagation();
                onCancel();
              }}
            >
              <Icon name={clearSVG} size="30px" />
            </Button>
          </Button.Group>
        )}
        <Button.Group>
          <Button
            basic
            primary
            disabled={!value}
            onClick={(e) => {
              e.stopPropagation();
              onSubmit();
            }}
          >
            <Icon name={aheadSVG} size="30px" />
          </Button>
        </Button.Group>
      </div>
    </Message>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
EditForm.propTypes = {
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  value: PropTypes.string,
  invalidValue: PropTypes.bool,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
EditForm.defaultProps = {
  value: '',
  invalidValue: false,
};

export default EditForm;
