import { ImageNum, IPersonage } from "../../../models/Personage"
import { MyTypeFromFirbase } from "./PersonagesList"
import player_1 from '../../../assets/images/persos/player1.png'
import player_2 from '../../../assets/images/persos/player2.png'
import player_3 from '../../../assets/images/persos/player3.png'

import imgArc from '../../../assets/images/armes/arc.png'
import imgEpee from '../../../assets/images/armes/epee.png'
import imgFleau from '../../../assets/images/armes/fleau.png'
import imgHache from '../../../assets/images/armes/hache.png'

type Props = {
  personage: MyTypeFromFirbase
}

export default function PersonageItem(props: Props) {
  const { strength, agility, intelligence, image, weapon } = props.personage.charac as IPersonage

  let srcImg = 
            image === ImageNum.PLAYER_1 ? player_1 :
            image === ImageNum.PLAYER_2 ? player_2 :
            image === ImageNum.PLAYER_3 ? player_3 : ""  

  let srcWeapon = 
            weapon === 'arc' ? imgArc :
            weapon === 'epee' ? imgEpee :
            weapon === 'fleau' ? imgFleau : 
            weapon === 'hache' ? imgHache : "" 
  return (
    <div className="row no-gutters text-center align-items-center mb-3 border rounded">
      <div className="col-4">
        <img className="img-fluid" src={srcImg} alt={`personnage_${props.personage.name}`} />
      </div>
      <div className="col-4">
        <ul className="list-group">
          <li className="list-group-item active"><b>{props.personage.name}</b></li>
          <li className="list-group-item">Force : {strength}</li>
          <li className="list-group-item">Agilité : {agility}</li>
          <li className="list-group-item">Intelliegence : {intelligence}</li>
        </ul>
      </div>
      <div className="col-4">
        <img className="img-fluid" src={srcWeapon} alt={`personnage_${props.personage.name}`} />
      </div>
    </div>
  )
}
