/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { DisciplineService } from './discipline.service';

describe('DisciplineService', () => {
  let service: DisciplineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisciplineService],
    }).compile();

    service = module.get<DisciplineService>(DisciplineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
