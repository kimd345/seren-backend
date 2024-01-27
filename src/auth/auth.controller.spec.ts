/*
  This test suite uses Jest's mocking capabilities to mock the AuthService.
  The test case spies on the login service method, providing a mock
  implementation that returns a resolved promise with the expected data.
  The test then asserts that the controller method returns the expected result.
*/

import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthEntity } from './entity/auth.entity';

jest.mock('./auth.service');

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('login', () => {
    it('should return an access token', async () => {
      const dto: LoginDto = {
        email: 'test@example.com',
        password: 'password',
      };
      const authEntity: AuthEntity = {
        accessToken: 'access_token',
      };

      jest.spyOn(service, 'login').mockResolvedValueOnce(authEntity);

      expect(await controller.login(dto)).toEqual(authEntity);
    });
  });
});
