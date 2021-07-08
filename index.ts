import * as Express from "express";

const app = Express();

app.get('/test', (req, res, next) => {
  res.json({
      hello: 'world'
  });
});

app.listen(3000, () => {
  console.log('App started');
});