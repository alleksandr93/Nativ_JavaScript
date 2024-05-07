let city: CityType

export type CityType = {

    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber: number
}
//type houses
export type HousesType = {
    id?:number
    buidedAt: number
    repaired: boolean
    address: AddressType
    street: StreetType
}
export type AddressType = {
    number: number
}
export type StreetType = {
    title: string
}

//type governmentBuildings
export type governmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: GovernmentAddressType
}
export type GovernmentAddressType = {
    street:GovernmentStreetType
}
export type GovernmentStreetType={
    title:string
}

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

test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buidedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].street.title).toBe('White street')

    expect(city.houses[1].buidedAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].street.title).toBe('Happy street')

    expect(city.houses[2].buidedAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].street.title).toBe('Happy street')

})

test('city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL')
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Str')

    expect(city.governmentBuildings[1].type).toBe('FIRE-STATION')
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe('Souths park str')
})