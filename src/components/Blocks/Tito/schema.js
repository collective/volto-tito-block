import { defineMessages } from 'react-intl';
import config from '@plone/volto/registry';

const messages = defineMessages({
  titoBlock: {
    id: 'Tito',
    defaultMessage: 'Tito',
  },
  event: {
    id: 'Event',
    defaultMessage: 'Event',
  },
  tickets: {
    id: 'Tickets',
    defaultMessage: 'Tickets',
  },
  discountCode: {
    id: 'Discount Code',
    defaultMessage: 'Discount Code',
  },
});

export const titoSchema = (props) => {
  const defaultEvent = config.blocks?.blocksConfig?.tito?.defaultEvent;
  return {
    title: props.intl.formatMessage(messages.titoBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['event', 'tickets', 'discountCode'],
      },
    ],

    properties: {
      event: {
        title: props.intl.formatMessage(messages.event),
        default: defaultEvent,
      },
      tickets: {
        title: props.intl.formatMessage(messages.tickets),
        default: '',
      },
      discountCode: {
        title: props.intl.formatMessage(messages.discountCode),
        default: '',
      },
    },
    required: ['event'],
  };
};
