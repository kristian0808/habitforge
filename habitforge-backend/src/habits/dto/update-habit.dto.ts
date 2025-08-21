import { IsString, IsOptional, IsEnum, IsBoolean, MinLength } from 'class-validator';

  export class UpdateHabitDto {
    @IsOptional()
    @IsString()
    @MinLength(1, { message: 'Habit name cannot be empty' })
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsEnum(['daily', 'weekly', 'monthly'], {
      message: 'Target frequency must be daily, weekly, or monthly',
    })
    targetFrequency?: 'daily' | 'weekly' | 'monthly';

    @IsOptional()
    @IsBoolean()
    isCompleted?: boolean;
  }