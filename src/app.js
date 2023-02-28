import gameboard from "./gameboard";
import menu from "./menu";
import knightsSVG from "./svg";
import listener from "./listener"
import './style.css';

function component() {
  const wrapper = document.createElement('div')
 
  wrapper.classList.add('wrapper')
  wrapper.appendChild(menu())
  wrapper.appendChild(knightsSVG())
  wrapper.appendChild(gameboard())

  document.body.appendChild(wrapper)
  listener()
  return wrapper
}

component()