/*
  This test suite uses Jest's mocking capabilities to mock the UsersService
  and JwtAuthGuard. Each test case spies on the corresponding service method,
  providing a mock implementation that returns a resolved promise with the
  expected data. The test then asserts that the controller method returns
  the expected result.
*/
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { User } from '@prisma/client';

jest.mock('./users.service');
jest.mock('../auth/jwt-auth.guard');

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, JwtAuthGuard],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const dto: CreateUserDto = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password',
      };
      const user: User = {
        id: '1',
        name: dto.name,
        email: dto.email,
        password: dto.password,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'create').mockResolvedValueOnce(user);

      expect(await controller.create(dto)).toEqual(new UserEntity(user));
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const user: User = {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'findAll').mockResolvedValueOnce([user]);

      expect(await controller.findAll()).toEqual([new UserEntity(user)]);
    });
  });

  describe('findOne', () => {
    it('should return a user', async () => {
      const user: User = {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'findOne').mockResolvedValueOnce(user);

      expect(await controller.findOne('1')).toEqual(new UserEntity(user));
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const dto: UpdateUserDto = {
        name: 'Updated User',
        email: 'updated@example.com',
        password: 'updated',
      };
      const user: User = {
        id: '1',
        name: dto.name,
        email: dto.email,
        password: dto.password,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'update').mockResolvedValueOnce(user);

      expect(await controller.update('1', dto)).toEqual(new UserEntity(user));
    });
  });

  describe('remove', () => {
    it('should remove a user', async () => {
      const user: User = {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'remove').mockResolvedValueOnce(user);

      expect(await controller.remove('1')).toEqual(new UserEntity(user));
    });
  });
});
