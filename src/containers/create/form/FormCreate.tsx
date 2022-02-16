import { Component } from 'react'

type MyProps = {
  handleValidation: (name: string) => void
  handleReset: () => void
}

export default class FormCreate extends Component<MyProps> {
  state = { name: '' }

  render() {
    return (
      <>
        <form 
          onSubmit={(e) => {
            e.preventDefault()
            console.log(this.state.name);
            
            this.props.handleValidation(this.state.name)
          }}
          className='form-group border border rounded p-3 mb-3'
        >
          <div className="mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder='Nom du personnage' 
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value})
              }}
            />
          </div>
          <button type="submit" className="btn btn-success me-1">Valider</button>
          <button type="button" className="btn btn-danger" onClick={this.props.handleReset}>Annuler</button>
        </form>
      </>
    )
  }
}
