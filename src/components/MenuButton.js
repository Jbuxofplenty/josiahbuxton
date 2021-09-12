import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { withRouter } from 'react-router-dom';
import { waitPromise } from 'helpers';

function MenuButton(props) {
  const [seconds, setSeconds] = useState(0);
  const [hidden, setHidden] = useState(!$("#name-swarm").length);

  const projects = async (historyPush) => {
    $("#name-swarm").fadeOut(1000);
    $("#line1").removeClass("menuBtn_line1");
    $("#line2").removeClass("menuBtn_line2");
    $("#line3").removeClass("menuBtn_line3");
    $("#menu-button").removeClass("z-100");
    $("#line1").addClass("hidden_line1");
    $("#line2").addClass("hidden_line2");
    $("#line3").addClass("hidden_line3");
    $("#close").addClass("z-100");
    $("#close").show();
    setHidden(true);
    if(historyPush) {
      await waitPromise(1300);
      props.history.push('/projects');
    }
  }

  const home = async (historyPush) => {
    $("#close").fadeOut(500);
    $("#projects").fadeOut(500);
    $("#line1").removeClass("hidden_line1");
    $("#line2").removeClass("hidden_line2");
    $("#line3").removeClass("hidden_line3");
    $("#menu-button").addClass("z-100");
    $("#line1").addClass("menuBtn_line1");
    $("#line2").addClass("menuBtn_line2");
    $("#line3").addClass("menuBtn_line3");
    $("#close").removeClass("z-100");
    setHidden(false);
    if(historyPush) {
      await waitPromise(1700);
      props.history.push('/home');
    }
  }

  const toggle = async () => {
    if(hidden) {
      await home(true);
    }
    else {
      await projects(true);
    }
  }

  useEffect(() => {
    setHidden(!$("#name-swarm").length)
  }, [$("#name-swarm")]);

  useEffect(() => {
    if(seconds < 2) {
      let interval = null;
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    else if (seconds === 2) {
      if(!hidden) {
        home(false);
      }
      else {
        projects(false);
      }
    }
  }, [seconds]);

  return (
    <div>
      <div id="menu-button" className="menuBtn z-100" onClick={() => toggle()}>
        <div id="line1" className="hidden_line1"></div>
        <div id="line2" className="hidden_line2"></div>
        <div id="line3" className="hidden_line3"></div>
      </div>
      <div className="x-container d-flex justify-content-center align-items-center">
        <div id="close" className="circle" onClick={() => toggle()}>
          <div className="x" />
        </div>
      </div>
    </div>
  );
}

export default withRouter(MenuButton);