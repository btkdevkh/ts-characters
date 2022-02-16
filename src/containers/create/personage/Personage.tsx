import { ImageNum, IPersonage } from "../../../models/Personage"
import player_1 from '../../../assets/images/persos/player1.png'
import player_2 from '../../../assets/images/persos/player2.png'
import player_3 from '../../../assets/images/persos/player3.png'
import classes from '../../../assets/css/Personage.module.css'
import Charac from "./Charac"

type Props = {
  personage: IPersonage,
  nbLives: number
  handleCLickLeft: () => void;
  handleCLickRight: () => void;
  handleClickMinus: (charac: string) => void;
  handleClickPlus: (charac: string) => void;
}

export default function Personage(props: Props) {
  const { image, strength, agility, intelligence } = props.personage
  const { nbLives, handleCLickLeft, handleCLickRight, handleClickMinus, handleClickPlus } = props

  let src = image === ImageNum.PLAYER_1 ? player_1 :
            image === ImageNum.PLAYER_2 ? player_2 :
            image === ImageNum.PLAYER_3 ? player_3 : ""  

  return (
    <div className="row no-gutters align-items-center">
      <div className="col-6">
        <div className="d-flex align-items-center text-center">
          <div className={[classes.arrow, classes.left].join(' ')} onClick={handleCLickLeft}></div>
            <div className="col">
              <img className="img-fluid" src={src} alt={`personnage_${image}`} />
            </div>
          <div className={[classes.arrow, classes.right].join(' ')} onClick={handleCLickRight}></div>
        </div>
      </div>

      <div className="col-6">
        <ul className="list-group mb-3">
          <li className="list-group-item active">Point restants : {nbLives}</li>
          <Charac 
            nbPoints={strength}
            handleClickMinus={() => handleClickMinus('strength')}
            handleClickPlus={() => handleClickPlus('strength')}
          >
            Force
          </Charac>
          <Charac 
            nbPoints={agility}
            handleClickMinus={() => props.handleClickMinus('agility')}
            handleClickPlus={() => props.handleClickPlus('agility')}
          >
            Agilité
          </Charac>
          <Charac 
            nbPoints={intelligence}
            handleClickMinus={() => props.handleClickMinus('intelligence')}
            handleClickPlus={() => props.handleClickPlus('intelligence')}
          >
            Intelligence
          </Charac>
        </ul>
      </div>
    </div>
  )
}
