import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MusicDocument = HydratedDocument<Music>;

@Schema()
export class Music {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  url: string;

  @Prop()
  imageMusic: string;

  @Prop()
  imageAuthor: string;

  @Prop()
  genre: string;
}

export const MusicSchema = SchemaFactory.createForClass(Music);
