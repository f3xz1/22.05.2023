let mytextbox = document.getElementById("mytextbox");

mytextbox.addEventListener("input", (event) => {
  let str = String(event.target.value);
  //   console.log(str[str.length - 1]);

  let res = "";
  for (const i of str) {
    console.log(i);
    // if (isNaN(i)) {
    if (isNaN(parseFloat(i))) {
      res += i;
    }
    event.target.value = res;
  }
});
