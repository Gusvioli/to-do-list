export const hendleForm = (
  e: any,
  setFormCreateAndEditTask:
  (arg0:
    {
      date: string;
      horaMinutes: string;
      description: string;
      caracters: number;
      id: number;
    }) => void,
  formCreateAndEditTask: any
  ) => {
  const { name, value } = e.target;
  setFormCreateAndEditTask({
    ...formCreateAndEditTask,
    [name]: value,
    caracters: name!=='date'&&name!=='horaMinutes'?value.length:0,
  });
};