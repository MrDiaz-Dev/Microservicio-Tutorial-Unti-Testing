import { Test, TestingModule } from '@nestjs/testing';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculadoraService],
    }).compile();

    service = module.get<CalculadoraService>(CalculadoraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('SUMAR', () => {
    it('DEBERIA RETORNAR i + i', () => {
      expect(service.sumar(1, 1)).toEqual(2);
    });
  });
});
