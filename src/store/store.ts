import { create } from "zustand"


export interface Habit{
    id: string,
    name: string,
    frequency:"daily" | "weekly",
    completeDates: string[],
    createdAt:string

}
const useHabitStore = create(() => {

})