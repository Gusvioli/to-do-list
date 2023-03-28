const searshControl = (search: string, dataContents: any) => {
  if (search) {
    const returnFilter = dataContents
      ? dataContents.filter((content: any) => {
          const description = content.description
            .toLowerCase()
            .includes(search.toLowerCase());
          const id = content.id.toString().includes(search);
          const date = content.date.includes(search);
          const emoji = content.emoji.includes(search);
          const status = content.status.includes(search);
          return description || id || date || emoji || status;
        })
      : [];
      return returnFilter;
  } else {
    return dataContents;
  }
}

export default searshControl;