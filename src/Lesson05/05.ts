import {governmentBuildingsType, HousesType} from '../Lesson02/02.test';

export const getStreetsTitlesOfGovernmentBuildings= (buildings: Array<governmentBuildingsType>)=>{
  return   buildings.map(el=>el.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>)=>{
  return houses.map(el => el.street.title)
}