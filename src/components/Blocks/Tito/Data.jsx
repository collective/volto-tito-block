import React from 'react';
import { BlockDataForm } from '@plone/volto/components';
import { titoSchema } from './schema';
import { useIntl } from 'react-intl';

const TitoBlockData = (props) => {
  const { data, block, onChangeBlock } = props;
  const intl = useIntl();
  const schema = titoSchema({ ...props, intl });
  Object.keys(schema.properties).forEach((key) => {
    const field = schema.properties[key];
    const defaultValue = field.default;
    if (defaultValue !== undefined && data[field] === undefined) {
      data[field] = defaultValue;
    }
  });
  const onChangeField = (id, value) => {
    onChangeBlock(block, {
      ...data,
      [id]: value,
    });
  };

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={onChangeField}
      formData={data}
      block={block}
    />
  );
};

export default TitoBlockData;
