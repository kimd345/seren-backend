import { Test, TestingModule } from '@nestjs/testing';
import { LykdatService } from './lykdat.service';

describe('LykdatService', () => {
  let service: LykdatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LykdatService],
    }).compile();

    service = module.get<LykdatService>(LykdatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
