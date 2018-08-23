import { Module } from '@nestjs/common';
import { OAControler } from './oa.controller';
import { OAService } from './oa.service';

@Module({
controllers: [OAControler],
providers: [OAService],
},
)
export class OAModule{
}