import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum Category {
    LILUZI = 'TWLG',
    YEAT = 'MSB',
    GOONIE = 'PP',

}

@Schema({
    timestamps: true,
})

export class Goobook {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;
}

export const GoobookSchema = SchemaFactory.createForClass(Goobook)