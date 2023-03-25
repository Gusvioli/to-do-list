import { useContext, useState } from "react";
import Context from "../../../context/Context";
import ListSimplesEnum from "../enums/ListSimplesEnum";
import pages from "./Pages";

function controlPages(
  qtdsPagesDisplay: number,
  contents: [{
  id: number;
  idUser: number;
  status: string;
  date: string;
  horaMinutes: string;
  description: string;
  emoji: string;
  createdAt: string;
  updatedAt: string;
}],
dateDb: string): any{
  const {
    setPage,
    page,
  } = useContext(Context);
    const returnFilter = contents
    ? contents.filter((content: any) => content.date === dateDb)
    : [];

    const pagesImport = pages(ListSimplesEnum.PAGES, contents, dateDb);

    const hendleClick = (e: any) => {
      const value = e.target.value;
      setPage(Number(value));
    };

    return (
      <div
        className="paginas"
        style={{
          padding: '20px',
        }}
      >
        <button
          type="button"
          value={0}
          disabled={page === 0}
          name='inicialPage'
          style={{
            padding: '3px',
            margin: '3px',
            cursor: 'pointer',
          }}
          onClick={(e) => hendleClick(e)}
        >
          Página inicial
        </button>
        {
          pagesImport.map((_: any, index: number) => {
            return (
              <button
                type="button"
                value={index}
                key={index}
                style={{
                  padding: '3px',
                  margin: '3px',
                  cursor: 'pointer',
                }}
                disabled={page === index}
                onClick={(e) => hendleClick(e)}
              >
                {index + 1}
              </button>
            );
          })
        }
        <button
          type="button"
          value={pagesImport.length - 1}
          disabled={page === pagesImport.length - 1}
          name="ultimaPage"
          style={{
            padding: '3px',
            margin: '3px',
            cursor: 'pointer',
          }}
          onClick={(e) => hendleClick(e)}
        >
          Ultima Página
        </button>
      </div>
    );
}

export default controlPages;