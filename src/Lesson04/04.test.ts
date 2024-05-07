beforeEach(() => {

})
test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 98, 14]
    const oldAges = ages.filter(el => el > 99)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})

test('get only completed task',()=>{
    const tasks = [
        {id:1,title:'Bread',isDone:false},
        {id:2,title:'Milk',isDone:true},
        {id:3,title:'Salt',isDone:false},
        {id:4,title:'Sugar',isDone:true},
    ]

    const completedTasks= tasks.filter(el=>el.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe("Milk")
    expect(completedTasks[1].title).toBe("Sugar")

})