export interface Exercise {
  id: string;
  name: string;
  duration: number;
  calories: number;
  date?: Date; //Opcionalni parametar
  state?: 'completed' | 'cancelled' | null;
}
