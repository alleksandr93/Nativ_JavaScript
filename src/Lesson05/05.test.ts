import {CityType} from '../Lesson02/02.test';
import {getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from './05';


let city:CityType

beforeEach(()=>{
    city = {
        title: 'New York',
        houses: [
            {
                buidedAt: 2012,
                repaired: false,
                address: {
                    number: 100
                },
                street: {
                    title: 'White street'
                }
            },
            {
                buidedAt: 2008,
                repaired: false,
                address: {
                    number: 100
                },
                street: {
                    title: 'Happy street'
                }
            },
            {
                buidedAt: 2020,
                repaired: false,
                address: {
                    number: 101
                },
                street: {
                    title: 'Happy street'
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }

            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South str'
                    }
                }

            }
        ],
        citizensNumber: 1000000
    }
})

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South str");
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Happy street");
})
