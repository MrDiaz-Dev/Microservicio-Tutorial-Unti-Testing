import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculadoraService {
  sumar(num1: number, num2: number): number {
    return num1 + num2;
  }

  restar(num1: number, num2: number): number {
    return num1 - num2;
  }

  multiplicar(num1: number, num2: number): number {
    return num1 * num2;
  }

  dividir(num1: number, num2: number): number {
    return ~~(num1 / num2);
  }

  potencia(num1: number, num2: number): number {
    return num1 ** num2;
  }
}
