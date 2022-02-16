export enum ImageNum {
  PLAYER_1 = 1,
  PLAYER_2 = 2,
  PLAYER_3 = 3,
}

export interface IPersonage {
  id?: number;
  image: number;
  strength: number;
  agility: number;
  intelligence: number;
  weapon: string|null;
}

export class Personage implements IPersonage {
  id: number = 0;
  image: number = ImageNum.PLAYER_1
  strength: number = 0
  agility: number = 0
  intelligence: number = 0
  weapon: string|null = null


  public static hydrateData(data: IPersonage): Personage | null {
    let output = new Personage()

    if(!data.id) {
      return null
    }

    output.id = data?.id ?? -1
    output.image = data.image ?? ''
    output.strength = data.strength ?? -1
    output.agility = data.agility ?? -1
    output.intelligence = data.intelligence ?? -1
    output.weapon = data.weapon ?? null

    return output
  }
}
