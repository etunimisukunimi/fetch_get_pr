export function Get() {

  function handleSubmit(event) {
    event.preventDefault();
    const dataResult = fetch("http://localhost:8080/data");
    dataResult
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(data.datastring);
      });
  }

  return (
    <div className="nav_block">
      <h1>получение данных</h1>
      <form onSubmit={handleSubmit}>
        <button id='send_button'>Отправить запрос</button>
      </form>
    </div>
  );
}
