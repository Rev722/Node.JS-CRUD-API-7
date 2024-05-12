import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Goobook } from './schemas/goobook.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class GoobookService {
    constructor(
        @InjectModel(Goobook.name)
        private goobookModel: mongoose.Model<Goobook>
    ) {}

    async findAll(): Promise<Goobook[]> {
        const goobooks = await this.goobookModel.find();
        return goobooks;
    }

    async create(goobook: Goobook): Promise<Goobook> {
        const res = await this.goobookModel.create(goobook);
        return res;
    }

    async findById(id: string): Promise<Goobook> {
        const goobook = await this.goobookModel.findById(id);

        if(!goobook) {
            throw new NotFoundException('Goobook not Found.');
        }

        return goobook;
    }

    async updateById(id: string, goobook: Goobook): Promise<Goobook> {
       return await this.goobookModel.findByIdAndUpdate(id, goobook, {
        new: true,
        runValidators: true,
       });
    }

    async deleteById(id: string): Promise<Goobook> {
        return await this.goobookModel.findByIdAndDelete(id);
     }
}
