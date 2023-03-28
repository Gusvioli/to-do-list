import { useContext, useState } from "react";
import Context from "../../../context/Context";
import ListSimplesEnum from "../enums/ListSimplesEnum";
import pages from "./Pages";
import '../../../styles/components/simple/typesToDoList.css';

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
          className="buttonControl"
          style={page === 0
            ? {opacity: '0.4', cursor: 'not-allowed'}
            : {}}
          onClick={(e) => hendleClick(e)}
        >
          Home page
        </button>
        {
          pagesImport.map((_: any, index: number) => {
            return (
              <button
                type="button"
                value={index}
                key={index}
                style={page === index
                  ? {opacity: '0.4', cursor: 'not-allowed' }
                  : {}}
                disabled={page === index}
                className="buttonControl-intermediario"
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
          style={page === pagesImport.length - 1
            ? {opacity: '0.4', cursor: 'not-allowed'}
            : {}}
          className="buttonControl"
          onClick={(e) => hendleClick(e)}
        >
          Last page
        </button>
      </div>
    );
}

export default controlPages;