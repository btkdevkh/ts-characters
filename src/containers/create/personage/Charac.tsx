import { ReactNode } from "react"
import classes from '../../../assets/css/Charac.module.css'

type Props = {
  children: ReactNode;
  nbPoints: number;
  handleClickMinus: () => void;
  handleClickPlus: () => void;
}

export default function Charac(props: Props) {
  const { children, nbPoints, handleClickPlus, handleClickMinus } = props    

  let slash: string[] = []
  for(let i = 0; i < nbPoints; i++) {
    slash.push("/")
  }  

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {children} : <span className={[classes.nbPoints].join(' ')}>{slash}</span>

        <div>
          <span className={["mx-3", classes.minus].join(' ')} onClick={handleClickMinus}>-</span>
          <span className={[classes.plus].join(' ')} onClick={handleClickPlus}>+</span>
        </div>
      </li>
    </>
  )
}
