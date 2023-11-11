import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Music, MusicSchema } from './schema/music.schema';

@Injectable()
export class MusicService {
  constructor(@InjectModel(Music.name) private musicModel: Model<Music>) {}

  async create(createMusicDto: CreateMusicDto) {
    const music = new this.musicModel(createMusicDto);
    await music.save();
    return {
      music,
      msg: 'Музыка создана',
    };
  }

  async findAll() {
    const musics = await this.musicModel.find({});
    return {
      data: musics,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} music`;
  }

  update(id: number, updateMusicDto: UpdateMusicDto) {
    return `This action updates a #${id} music`;
  }

  remove(id: number) {
    return `This action removes a #${id} music`;
  }
}
