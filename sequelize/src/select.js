const seq = require('./seq')
const { Op } = require('sequelize');
const { Demo, ChildDemo} = require('./model')

!(async () => {
    // const demo = await Demo.findAll({
    //     where: {
    //         id: {
    //             [Op.or]: [1,3]
    //         }
    //     }
    // });


    const demo = await Demo.findAll({
        // order: ['id', 'desc'],
        limit: 2,
        offset: 1
    })

    const count = await Demo.findAndCountAll({

    })

    console.log(demo.map((item) => item.dataValues), count.count)
})()



