import app from "./infra/http/express";
import AppDataSource from "./infra/database/ormconfig";

AppDataSource.initialize().then(() => {
  return app.listen(process.env.PORT, () => {
    console.log(`API iniciada. Acesse a rota http://localhost:${process.env.PORT}`);
  })
});