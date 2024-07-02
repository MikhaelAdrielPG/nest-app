import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService) {}

    getData() {
        console.log('Disk membutuhkan daya 20 watt untuk menampilkan data');
        this.powerService.supplyPower(20, 'Disk');
        return 'data yang diambil dari disk';
    }
}
