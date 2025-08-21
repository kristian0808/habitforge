import { Injectable, NotFoundException } from '@nestjs/common';
import { Habit } from './interfaces/habit.interface';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { CreateHabitDto } from './dto/create-habit.dto';

@Injectable()
export class HabitsService {
    private habits: Habit[] = [{
        id: '1',
        userId: 'user-1',
        name: 'Read for 30 minutes',
        description: 'Read books to improve knowledge',
        targetFrequency: 'daily',
        isCompleted: false,
        completedDates: [],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
    },
    {
        id: '2',
        userId: 'user-1',
        name: 'Exercise',
        description: 'Go to gym or workout at home',
        targetFrequency: 'daily',
        isCompleted: true,
        completedDates: [new Date()],
        createdAt: new Date('2024-01-02'),
        updatedAt: new Date(),
    },
    ];

    async findAll(): Promise<Habit[]> {
        return this.habits
    }

    async findOne(id: string): Promise<Habit> {
        const habit = this.habits.find(h => h.id === id);
        if (!habit) {
            throw new NotFoundException(`Habits with ID ${id} not found`)
        }
        return habit;
    }

    async create(createHabitDto: CreateHabitDto): Promise<Habit>{
        const newHabit: Habit = {
            id: Date.now().toString(),
            userId: 'user-1',
            ...createHabitDto,
            isCompleted: false,
            completedDates: [],
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        this.habits.push(newHabit);
        return newHabit
    }


    async update(id:string, updateHabitDto: UpdateHabitDto): Promise<Habit> {

        const habitIndex = this.habits.findIndex(h => h.id === id);
        if(habitIndex === -1)
            throw new NotFoundException(`Habit with ID ${id} not found`)


        const updatedHabit = {
            ...this.habits[habitIndex],
            ...updateHabitDto,
            updatedAt: new Date(),
        };

        this.habits[habitIndex]= updatedHabit;
        return updatedHabit
    }


    async remove(id:string):Promise<void> {

        const habitIndex = this.habits.findIndex(h => h.id === id);
    
        if (habitIndex === -1){
            throw new NotFoundException(`Habit with Id ${id} not found`)
        }

        this.habits.slice(habitIndex, 1)
    }
}
