module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `hello,${req.body.email}!!`
    })
  })
}
