import { DataSource } from "typeorm";
import { User } from 'src/typeorm/entities/User';

export const UserRepositoryDataSource = new DataSource(
    {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Jimmy@MySQL',
        database: 'nestjs_mysql_tutorial',
        entities: [User],
        synchronize: true,
      }
)


UserRepositoryDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })