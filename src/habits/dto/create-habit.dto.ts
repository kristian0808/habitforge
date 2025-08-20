import { IsString, IsOptional, IsEnum, MinLength } from 'class-validator';

  export class CreateHabitDto {
    @IsString()
    @MinLength(1, { message: 'Habit name cannot be empty' })
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsEnum(['daily', 'weekly', 'monthly'], {
      message: 'Target frequency must be daily, weekly, or monthly',
    })
    targetFrequency: 'daily' | 'weekly' | 'monthly';
  }