import { Component } from 'react'
import HeadingH1 from '../../components/HeadingH1'
import { ImageNum, IPersonage } from '../../models/Personage'
import { createPersonage } from '../../serviceApi/personageServiceApi'
import { getWeapons } from '../../serviceApi/weaponServiceApi'
import FormCreate from './form/FormCreate'
import Personage from './personage/Personage'
import Weapons from './weapons/Weapons'

interface MyProps {
  handleRefresh: () => void
}

interface MyState {
  personage: IPersonage;
  nbLives: number;
  weapons: string[]|null;
  loading: boolean;
  isOpen: boolean;
}

export default class CreatorPersonage extends Component<MyProps, MyState> {
  state: MyState = {
    personage: {
      id: 1,
      image: ImageNum.PLAYER_1,
      strength: 0,
      agility: 0,
      intelligence: 0,
      weapon: null,
    },
    nbLives: 7,
    weapons: null,
    loading: false,
    isOpen: false,
  }

  handleCLickLeft() {
    this.setState((o) => {
      const newPerso = {...o.personage}
      if(newPerso.image <= ImageNum.PLAYER_1) newPerso.image = 3
      else newPerso.image--
      return { personage: newPerso }
    })
  }

  handleCLickRight() {
    this.setState((o) => {
      const newPerso = {...o.personage}
      if(newPerso.image >= ImageNum.PLAYER_3) newPerso.image = 1
      else newPerso.image++
      return { personage: newPerso }
    })
  }

  handleClickMinus(charac: string) {        
    this.setState((o: any) => {      
      if(o.personage[charac] <= 0 || o.nbLives >= 7) return null
      const newPointsCharac = o.personage[charac] - 1
      const newPerso = {...o.personage}
      const newNbLives = o.nbLives + 1
      newPerso[charac] = newPointsCharac

      return { personage: newPerso, nbLives: newNbLives}
    })
  }

  handleClickPlus(charac: string) {   
    this.setState((o: any) => {      
      if(o.personage[charac] >= 5 || o.nbLives <= 0) return null
      const newPointsCharac = o.personage[charac] + 1
      const newPerso = {...o.personage}
      const newNbLives = o.nbLives - 1
      newPerso[charac] = newPointsCharac

      return { personage: newPerso, nbLives: newNbLives}
    })
  }

  handleSelectWeapon(weapon: string|null) {
    this.setState(o => {
      return {
        personage: {
          ...o.personage,
          weapon: o.personage.weapon = weapon as string 
        }
      }
    })
  }

  handleReset() {
    this.setState({
      personage: {
        id: 1,
        image: ImageNum.PLAYER_1,
        strength: 0,
        agility: 0,
        intelligence: 0,
        weapon: null,
      },
      nbLives: 7,
      isOpen: false
    })
  }

  handleValidation(name: string) {    
    this.setState({ loading: true })

    const charac: any = {
      charac: { ...this.state.personage },
      name: name
    }

    createPersonage(charac)
      .then(res => {
        console.log(res);
        this.setState({ loading: false })
        this.handleReset()
        this.props.handleRefresh()
      })
      .catch(err => {
        console.log("error", err);
        this.setState({ loading: false })
        this.handleReset()
      })
  }

  componentDidMount() {
    this.setState({ loading: true })

    getWeapons()
      .then(data => {
        this.setState({
          weapons: Object.values(data),
          loading: false
        })
      })
      .catch(err => {
        console.log("error", err);
        this.setState({
          loading: false
        })
      })
  }

  render() {
    const { personage, nbLives, weapons, loading, isOpen } = this.state

    return (
      <>
        <div className="container">
          <HeadingH1>TS Personage & Firebase</HeadingH1>
          { isOpen && 
            <FormCreate 
              handleValidation={this.handleValidation.bind(this)} 
              handleReset={this.handleReset.bind(this)} 
            /> 
          }

          {
            personage && (
              <Personage 
                key={personage.id} 
                personage={personage} 
                nbLives={nbLives}
                handleCLickLeft={this.handleCLickLeft.bind(this)} 
                handleCLickRight={this.handleCLickRight.bind(this)} 
                handleClickMinus={this.handleClickMinus.bind(this)} 
                handleClickPlus={this.handleClickPlus.bind(this)} 
              />
            )
          }

          <Weapons
            currentWeapon={personage.weapon} 
            weapons={weapons} 
            handleSelectWeapon={this.handleSelectWeapon.bind(this)} 
          />
          <div className="d-flex justify-content-between mb-3">
            <button className="btn btn-danger" onClick={this.handleReset.bind(this)}>Réinitialiser</button>
            <button className="btn btn-success" onClick={() => this.setState({ isOpen: true })}>Créer</button>
          </div>

          { loading && <div className='text-center text-danger'>Opération en cours...</div> }
        </div>
      </>
    )
  }
}
