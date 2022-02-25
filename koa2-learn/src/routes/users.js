const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/profile/:id', async (ctx, next) => {
  ctx.body = ctx.params
})

router.get(
  '/user/:id',
  (ctx, next) => {
    const { id } = ctx.params
      ctx.user = {
        name: 'this is name',
        id: id
      }
      ctx.body = ctx.user
      // next()
  },
  // ctx => {
  //   console.log(ctx.user);
  //   // => { id: 17, name: "Alex" }
  // }
);

module.exports = router
