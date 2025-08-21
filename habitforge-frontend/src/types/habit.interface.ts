export interface Habit {
    id: string;
    userId: string;
    name: string;
    description?: string;
    targetFrequency: 'daily' | 'weekly' | 'monthly'
    isCompleted: boolean;
    completedDates: Date[];
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateHabitDto {
    name: string;
    description?: string;
    targetFrequency: 'daily' | 'weekly' | 'monthly'
}

export interface UpdateHabitDto {
    name?: string;
    description?: string;
    targetFrequency?: 'daily' | 'weekly' | 'monthly'
    isCompleated?: boolean;
}

