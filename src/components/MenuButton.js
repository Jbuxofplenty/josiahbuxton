import React, { useEffect, useState } from 'react';
import $ from 'jquery';

export default function MenuButton() {
  const [seconds, setSeconds] = useState(0);
  const [hidden, setHidden] = useState(false);

  const toggle = () => {
    if(hidden) {
      $("#close").fadeOut(1000)
      $("#line1").removeClass("hidden_line1");
      $("#line2").removeClass("hidden_line2");
      $("#line3").removeClass("hidden_line3");
      $("#line1").addClass("menuBtn_line1");
      $("#line2").addClass("menuBtn_line2");
      $("#line3").addClass("menuBtn_line3");
      setHidden(false);
    }
    else {
      $("#line1").removeClass("menuBtn_line1");
      $("#line2").removeClass("menuBtn_line2");
      $("#line3").removeClass("menuBtn_line3");
      $("#line1").addClass("hidden_line1");
      $("#line2").addClass("hidden_line2");
      $("#line3").addClass("hidden_line3");
      $("#close").show();
      setHidden(true);
    }
  }

  useEffect(() => {
    if(seconds < 2) {
      let interval = null;
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    else if (seconds === 2){
      $("#line1").removeClass("hidden_line1");
      $("#line2").removeClass("hidden_line2");
      $("#line3").removeClass("hidden_line3");
      $("#line1").addClass("menuBtn_line1");
      $("#line2").addClass("menuBtn_line2");
      $("#line3").addClass("menuBtn_line3");
    }
  }, [seconds]);

  return (
    <div>
      <div className="menuBtn" onClick={() => toggle()}>
        <div id="line1" className="hidden_line1"></div>
        <div id="line2" className="hidden_line2"></div>
        <div id="line3" className="hidden_line3"></div>
      </div>
      <div id="close" className="x" onClick={() => toggle()} />
    </div>
  );
}
