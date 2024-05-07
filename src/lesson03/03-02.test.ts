import {CityType} from '../Lesson02/02.test';
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from './03';

let city: CityType;


beforeEach(() => {
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
                        title: 'Souths park str'
                    }
                }

            }
        ],
        citizensNumber: 1000000
    }
})

test('Budget should be changed for hospital',()=>{
    addMoneyToBudget(city.governmentBuildings[0],100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for FIRE-STATION',()=>{
    addMoneyToBudget(city.governmentBuildings[1],-100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('House should be repaired', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});

test("staff should be increased", () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
});
test('Staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
});

