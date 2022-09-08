import Btn from "./Btn"
import style from "../css/Btns.module.css"

export default function Btns({ clearList, clearDones }) {
  return (
    <div className={style.wrapper}>
      <Btn onClick={clearList}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          focusable='false'
          viewBox='0 0 12 12'
        >
          <path
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            d='M10 4c-.8-1.1-2-2.5-4.1-2.5-2.5 0-4.4 2-4.4 4.5s2 4.5 4.4 4.5c1.3 0 2.5-.6 3.3-1.5m1.3-7.5V4c0 .3-.2.5-.5.5H7.5'
          />
        </svg>
      </Btn>
      <Btn onClick={clearDones}>
        <svg
          height='30px'
          id='Layer_1'
          version='1.1'
          viewBox='0 0 91 91'
          width='30'
          xmlSpace='preserve'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <g>
            <path
              fill='black'
              d='M67.305,36.442v-8.055c0-0.939-0.762-1.701-1.7-1.701H54.342v-5.524c0-0.938-0.761-1.7-1.699-1.7h-12.75   c-0.939,0-1.701,0.762-1.701,1.7v5.524H26.93c-0.939,0-1.7,0.762-1.7,1.701v8.055c0,0.938,0.761,1.699,1.7,1.699h0.488v34.021   c0,0.938,0.761,1.7,1.699,1.7h29.481c3.595,0,6.52-2.924,6.52-6.518V38.142h0.486C66.543,38.142,67.305,37.381,67.305,36.442z    M41.592,22.862h9.35v3.824h-9.35V22.862z M61.719,67.345c0,1.719-1.4,3.117-3.12,3.117h-27.78v-32.32l30.9,0.002V67.345z    M63.904,34.742H28.629v-4.655h11.264h12.75h11.262V34.742z'
            />
            <rect height='19.975' width='3.4' x='36.066' y='44.962' />
            <rect height='19.975' width='3.4' x='44.566' y='44.962' />
            <rect height='19.975' width='3.4' x='53.066' y='44.962' />
          </g>
        </svg>
      </Btn>
    </div>
  )
}
