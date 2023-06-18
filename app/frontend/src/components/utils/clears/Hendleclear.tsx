export const hendleClear = (
  setFormCreateAndEditTask: (arg0: {
    date: string
    horaMinutes: string
    description: string
    caracters: number
    id: number
  }) => void,
  formCreateAndEditTask: any,
) => {
  setFormCreateAndEditTask({
    ...formCreateAndEditTask,
    description: '',
  })
}
