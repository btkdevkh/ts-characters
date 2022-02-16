import { ReactNode } from "react"

type Props = {
  currentWeapon: boolean;
  children: ReactNode
  imgWeapon: string,
  handleSelectWeapon: () => void
}

export default function Weapon(props: Props) {
  return (
    <div>
      <div 
        style={{
          cursor: 'pointer',
          opacity: `${props.currentWeapon ? '1' : '0.5'}`
        }}
        onClick={props.handleSelectWeapon}
      >
        <img src={props.imgWeapon} alt='weapon' />
      </div>
      <div>{props.children}</div>
    </div>
  )
}
