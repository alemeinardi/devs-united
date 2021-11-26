import React from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const options = {
  title: 'Title',
  message: 'Message',
  buttons: [
    {
      label: 'Yes',
      onClick: () => alert('Click Yes')
    },
    {
      label: 'No',
      onClick: () => alert('Click No')
    }
  ],
  childrenElement: () => <div />,
  customUI: ({ onClose }) => <div>Custom UI</div>,
  closeOnEscape: true,
  closeOnClickOutside: true,
  willUnmount: () => {},
  afterClose: () => {},
  onClickOutside: () => {},
  onKeypressEscape: () => {},
  overlayClassName: "overlay-custom-class-name"
};

const alert = () => {confirmAlert(options)};

export default alert;