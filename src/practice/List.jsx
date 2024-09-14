const List = () => {
  let list = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  return (
    <div>
      <h1>Even List : </h1>
      <br />
      <ol className="evenOrder">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <h1>odd List : </h1>
      <br />
      <ol className="oddOrder">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <h1>Fibbonacci :</h1>
      <br />
      <ol className="number-list">
        {list.map((item, index) => (
          <li key={index}>{item} </li>
        ))}
      </ol>
    </div>
  );
};

export default List;
