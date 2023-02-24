import { ChangeEvent, useEffect, useState } from "react";
import { requestData } from "../../services/requests";

function CreateTasck() {  
  const [date, setDate] = useState('');
  const [emojis, setEmojis] = useState([]);
  const [descript, setDescript] = useState('');

  // Função para pegar os dados do input
  const hendleForm = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const { id, value } = e.target;
      if (id === 'date') setDate(value);
      if (id === 'descript') setDescript(value);
  };

  const hendleCreateTasck = () => {
    setDescript('');
  };

  useEffect(() => {
    const getEmojis = async () => {
      const response = await requestData('/emojis');
      setEmojis(response);
    };
    getEmojis();
  }, [setEmojis]);

  return (
    <form>
      <label htmlFor="emoje">
        {emojis.map((content: any, index: any) =>
        <div key={index}>
          <div>id: {content.id}</div>
          <div>name: {content.name}</div>
          <img src={content.url} alt={content.name} />
        </div>)}
      </label>
      <label htmlFor="subtitle">
        Date:
        <input
          type="date"
          name="date"
          id="date"
          onChange={(e) => hendleForm(e)}
        />
      </label>
      <label htmlFor="descript">
        Descript tasck:
        <textarea
          name="descript"
          id="descript"
          cols={60}
          rows={5}
          value={descript}
          maxLength={255}
          onChange={(e) => hendleForm(e)}
        />
      </label>
      <button
        type="button"
        onClick={hendleCreateTasck}
      >
        Create Tasck
      </button>
    </form>
  );
}

export default CreateTasck;