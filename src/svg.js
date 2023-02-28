import knight from '../asset/knight.svg';

export default function knightsSVG() {
  const sv = new Image();
  sv.src = knight;
  sv.classList.add('knight')
  return sv
}