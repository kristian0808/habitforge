import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { Habit } from './interfaces/habit.interface';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Controller('habits')
  export class HabitsController {
    constructor(private readonly habitsService: HabitsService) {}

    @Get()
    async findAll(): Promise<Habit[]> {
      return this.habitsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Habit> {
      return this.habitsService.findOne(id);
    }

    @Post()
    async create(@Body() createHabitDto: CreateHabitDto): Promise<Habit> {
      return this.habitsService.create(createHabitDto);
    }

    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() updateHabitDto: UpdateHabitDto,
    ): Promise<Habit> {
      return this.habitsService.update(id, updateHabitDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
      return this.habitsService.remove(id);
    }
  }
