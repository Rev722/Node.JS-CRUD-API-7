import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GoobookService } from './goobook.service';
import { Goobook } from './schemas/goobook.schema';
import { CreateGoobookDto } from './dto/create-goobook.dto';
import { UpdateGoobookDto } from './dto/update-goobook.dto';

@Controller('goobooks')
export class GoobookController {
    constructor(private goobookService: GoobookService) {}

    @Get()
    async getAllGoobooks(): Promise<Goobook[]> {
        return this.goobookService.findAll();
    }

    @Post()
    async createGoobook(
        @Body()
        goobook: CreateGoobookDto,
    ): Promise <Goobook> {
        return this.goobookService.create(goobook);
    }

    @Get(':id')
    async getGoobook(
        @Param('id')
        id: string,
    ): Promise <Goobook> {
        return this.goobookService.findById(id);
    }

    @Put(':id')
    async updateGoobook(
        @Param('id')
        id: string,
        @Body()
        goobook: UpdateGoobookDto,
    ): Promise <Goobook> {
        return this.goobookService.updateById(id, goobook);
    }

    @Delete(':id')
    async deleteGoobook(
        @Param('id')
        id: string,
    ): Promise <Goobook> {
        return this.goobookService.deleteById(id);
    }
}
