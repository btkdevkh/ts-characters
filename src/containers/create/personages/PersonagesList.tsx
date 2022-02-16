import { useEffect, useState } from "react"
import { IPersonage } from "../../../models/Personage"
import { getPersonages } from "../../../serviceApi/personageServiceApi"
import PersonageItem from "./PersonageItem"

type Props = {
  refresh: boolean;
}

export type MyTypeFromFirbase = {
  charac: IPersonage;
  name: string;
}

export default function PersonagesList(props: Props) {
  const [personages, setPersonages] = useState<MyTypeFromFirbase[]|null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getPersonages()
    .then(data => {      
      setPersonages(Object.values(data))
      setLoading(false)      
    })
    .catch(err => {
      console.log("error", err);
      setLoading(false)
    })
  }, [props.refresh])

  return (
    <div className="container p-4">
      { loading && <div className="text-center text-danger">Opération en cours...</div> }
      {
        personages &&
        personages.length > 0 && 
        personages.map((personage, idx) => (
          <PersonageItem 
            key={idx} 
            personage={personage} 
          />
        ))
      }
    </div>
  )
}
