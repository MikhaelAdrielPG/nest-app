import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    supplyPower(watts: number, module: string) {
        console.log(`uppling ${watts} worth of power form ${module}`);
        
    }
}
