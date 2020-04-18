import React from 'react';
import { Dom } from 'react-three-fiber';

export default function Loader() {
  return (
    <Dom center>
      <div className="lds-grid fade-in">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Dom>
  );
}
