export interface ITodo {
  id: string;
  isCompleted: boolean;
  text: string;
}

export type TTodoStatus = 'all' | 'active' | 'completed';
