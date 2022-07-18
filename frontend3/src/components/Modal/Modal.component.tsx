import { Input, Button } from '@mantine/core';
import React from 'react';

const Modal = (props) => {
  console.log(props)
    return <>
      <Input defaultValue={props.innerProps.element.id} />
      <Input defaultValue={props.innerProps.element.email}  />

      <Input defaultValue={props.innerProps.element.phone} />
      <Input defaultValue={props.innerProps.element.sex} />
      <Input defaultValue={props.innerProps.element.username} />
      <Input defaultValue={props.innerProps.element.zone} />
      <Button onClick={() => props.context.closeModal()}>Update</Button>
    </>
  }
export default Modal;
