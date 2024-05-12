import { Module } from '@nestjs/common';
import { GoobookService } from './goobook.service';
import { GoobookController } from './goobook.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GoobookSchema } from './schemas/goobook.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name:'Goobook', schema: GoobookSchema }])],
  providers: [GoobookService],
  controllers: [GoobookController]
})
export class GoobookModule {}
