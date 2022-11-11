import { Injectable } from '@nestjs/common';
import { User } from 'src/typeorm/entities/User';
import { UserRepositoryDataSource } from './users.repository.datasource';

export const UserRepository = UserRepositoryDataSource.getRepository(User).extend({
    getTest() {
        return {
            id: 813,
            username: "hidden",
            password: "666",
            createdAt: new Date(),
            authStrategy: null,
        };
    }
})