const seq = require('./seq')
const { Demo, ChildDemo} = require('./model')



!(async => {
    Demo.destroy( {
        where: {
            id: 2
        }
    })
})()