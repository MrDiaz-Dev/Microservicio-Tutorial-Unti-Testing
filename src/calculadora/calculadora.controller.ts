import { Controller, Get, Param } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';

@Controller('calculadora')
export class CalculadoraController {
  constructor(private calculadora: CalculadoraService) {}

  @Get('/suma/:num/:num2')
  sumar(@Param('num') num1, @Param('num2') num2): number {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return this.calculadora.sumar(num1, num2);
  }

  @Get('/resta/:num/:num2')
  restar(@Param('num') num1, @Param('num2') num2): number {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return this.calculadora.restar(num1, num2);
  }

  @Get('/multiplica/:num/:num2')
  multiplicar(@Param('num') num1, @Param('num2') num2): number {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return this.calculadora.multiplicar(num1, num2);
  }

  @Get('/divide/:num/:num2')
  dividir(@Param('num') num1, @Param('num2') num2): number {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return this.calculadora.dividir(num1, num2);
  }

  @Get('/potencia/:num/:num2')
  potencia(@Param('num') num1, @Param('num2') num2): number {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return this.calculadora.potencia(num1, num2);
  }
}

//   @Get('/suma')
//   sumar(num1: number, num2: number): number {
//     num1 = 2;
//     num2 = 3;
//     return this.calculadora.sumar(num1, num2);
//   }

//   @Get('/resta')
//   restar(num1: number, num2: number): number {
//     num1 = 2;
//     num2 = 3;
//     return this.calculadora.restar(num1, num2);
//   }

//   @Get('/multiplica')
//   multiplicar(num1: number, num2: number): number {
//     num1 = 2;
//     num2 = 3;
//     return this.calculadora.multiplicar(num1, num2);
//   }

//   @Get('/divide')
//   dividir(num1: number, num2: number): number {
//     num1 = 2;
//     num2 = 3;
//     return this.calculadora.dividir(num1, num2);
//   }

//   @Get('/potencia')
//   potencia(num1: number, num2: number): number {
//     num1 = 2;
//     num2 = 3;
//     return this.calculadora.potencia(num1, num2);
//   }
// }
