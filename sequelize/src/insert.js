const seq = require('./seq')
const { Demo, ChildDemo} = require('./model')
// seq.sync({force: true}).then(() => {
//     process.exit();
// })
!(async() => {

    const user = await Demo.create({
        firstName: 'firstName100',
        lastName: 'lastName100',
        comment: 'this is comment'
    }).then((r)=>{
        console.log(r.toJSON());
        process.exit()
       
    })



})()