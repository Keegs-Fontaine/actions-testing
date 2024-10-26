/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

                  import router from '@adonisjs/core/services/router'
                  router.post('/test', async () => {
  return 'hello from post'
})

router.get('/test', async () => {
  return 'hi'
})
