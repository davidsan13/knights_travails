import gameboard from "./gameboard";
import menu from "./menu";
import knightsSVG from "./svg";
import './style.css';

function component() {
  const wrapper = document.createElement('div')

  wrapper.classList.add('wrapper')
  wrapper.appendChild(menu())
  wrapper.appendChild(knightsSVG())
  wrapper.appendChild(gameboard())

  document.body.appendChild(wrapper)
  return wrapper
}

component()