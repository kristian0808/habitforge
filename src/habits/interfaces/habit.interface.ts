export interface Habit {
    id: string;
    userId: string;
    name: string;
    description?: string;
    targetFrequency: 'daily' | 'weekly' | 'monthly';
    isCompleted: boolean;
    completedDates: Date[];
    createdAt: Date;
    updatedAt: Date;
  }