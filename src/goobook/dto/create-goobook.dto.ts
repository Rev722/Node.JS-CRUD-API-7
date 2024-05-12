import { Category } from "../schemas/goobook.schema";



export class CreateGoobookDto{
    readonly title: string; 
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}