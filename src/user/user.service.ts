import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User } from './schema/user.schema';
import * as bcrypt from 'bcrypt';
import { genSaltSync } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto) {
    const hashPassword = bcrypt.hashSync(
      createUserDto.password + process.env.SECRET_KEY,
      genSaltSync(10),
    );
    const user = new this.userModel({
      ...createUserDto,
      password: hashPassword,
    });
    await user.save();

    return { data: user };
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(OrMailOrName: string) {
    const user = await this.userModel.findOne({
      $or: [
        {
          email: OrMailOrName,
        },
        //
        {
          username: OrMailOrName,
        },
      ],
    });
    if (user) {
      return user;
    }

    return {
      status: 'OK',
      msg: 'Пользователя не существует',
    };
  }

  async findById(id: ObjectId) {
    const user = await this.userModel.findById(id);

    if (user) {
      return user;
    }

    return {
      msg: 'Пользователя не существует',
    };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
