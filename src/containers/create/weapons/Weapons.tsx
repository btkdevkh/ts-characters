import Weapon from "./Weapon"
import imgArc from '../../../assets/images/armes/arc.png'
import imgEpee from '../../../assets/images/armes/epee.png'
import imgFleau from '../../../assets/images/armes/fleau.png'
import imgHache from '../../../assets/images/armes/hache.png'

type Props = {
  currentWeapon: string|null; 
  weapons: string[]|null;
  handleSelectWeapon: (weapon: string|null) => void;
}

export default function Weapons(props: Props) {
  
  return (
    <div className="row no-gutters text-center mb-3">
      {
        props.weapons &&
        props.weapons.length > 0 &&
        props.weapons.map((weapon, i) => {
          let imgWeapon: string = ''
          switch(weapon) {
            case 'arc': imgWeapon = imgArc
              break;
            case 'epee': imgWeapon = imgEpee
              break;
            case 'fleau': imgWeapon = imgFleau
              break;
            case 'hache': imgWeapon = imgHache
              break;
          }

          return (
            <div className="col-3" key={i}>
              <Weapon 
                currentWeapon={props.currentWeapon === weapon} 
                imgWeapon={imgWeapon}
                handleSelectWeapon={() => props.handleSelectWeapon(weapon as string)}
              >
                {weapon}
              </Weapon>
            </div>
          )
        })
      }
    </div>
  )
}
