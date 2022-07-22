import { injectIntl } from 'react-intl';
import React from 'react';
import TitoView from './DefaultView';
import Wrapper from '@plone/volto/storybook';

const StoryComponent = injectIntl(({ children, ...args }) => {
  return (
    <Wrapper>
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <TitoView {...args} />
      </div>
    </Wrapper>
  );
});

export const Widget = StoryComponent.bind({});
Widget.args = {};

export const WidgetFilterTickets = StoryComponent.bind({});
WidgetFilterTickets.args = {
  tickets: '3elajg6qcxu,6qiiw4socs4',
};

export const WidgetDiscountCode = StoryComponent.bind({});
WidgetDiscountCode.args = {
  discountCode: 'half-off',
};

export default {
  title: 'Public/Blocks/TitoBlock/View',
  component: TitoView,
  argTypes: {
    event: {
      name: 'Event',
      defaultValue: 'ultimateconf/2013',
      control: {
        type: 'text',
      },
    },
    tickets: {
      name: 'Tickets',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    discountCode: {
      name: 'Discount Code',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
  },
};
