import { gameboard }from "./gameboard";
import menu from "./menu";
import knightsSVG from "./svg";
import listener from "./listener";

import knightSP from "./path";
import { Controller } from "./controller";
import './style.css';

function component() {
  const wrapper = document.createElement('div')
 
  wrapper.classList.add('wrapper')
  wrapper.appendChild(menu())
  
  wrapper.appendChild(gameboard())

  document.body.appendChild(wrapper)
  listener()
  Controller().startTravail()
  return wrapper
}

component()