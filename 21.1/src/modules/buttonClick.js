import log from "./logger.js";

function addEventListener(name) {
  const before = Date.now();

  const button = document.querySelector("#btn");

  button.addEventListener("click", () => {
    const after = Date.now();
    log(name, before, after, "button has been clicked");
    //функция log имеет доступ к входящим параметрам before, after
    //которые инициализированы во внешнем лексическом окружении.
  });
}

export { addEventListener };
