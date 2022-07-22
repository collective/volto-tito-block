import React, { useEffect, useState } from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';
import EditForm from './EditForm';
import TitoBlockData from './Data';
import TitoBlockView from './View';

const TitoBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  const [displayForm, setDisplayForm] = useState(data.event ? false : true);
  const [event, setEvent] = useState(data.event);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    if (data.event !== event) {
      setEvent(event);
    }
  }, [data, event]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      setEvent(e.target.value);
      submitEvent();
    }
  };

  const clearForm = () => {
    setEvent('');
  };

  const onChange = (e) => {
    setEvent(e.target.value);
  };

  const submitEvent = () => {
    if (event) {
      setHasError(false);
      setDisplayForm(false);
      onChangeBlock(block, { ...data, event: event });
    } else {
      setHasError(true);
    }
  };

  return displayForm ? (
    <EditForm
      onKeyDown={onKeyDown}
      onChange={onChange}
      onSubmit={submitEvent}
      onCancel={clearForm}
      value={event}
      invalidValue={hasError}
    />
  ) : (
    <>
      <TitoBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <TitoBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(TitoBlockEdit);
