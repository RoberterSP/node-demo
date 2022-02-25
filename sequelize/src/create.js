// import seq from './seq'
const seq = require('./seq')

require('./model')

// 测试连接情况
seq.authenticate().then(() => {
    console.log('ok')
}).catch((err) => {
    console.log(err)
})

// 

seq.sync({force: true}).then(() => {
    process.exit();
})


