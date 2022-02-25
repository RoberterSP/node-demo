const seq = require('./seq')
const { Demo, ChildDemo} = require('./model')



!(async => {
    Demo.update({
        lastName: 'this is update lastName'
    }, {
        where: {
            id: 2
        }
    })
})()