// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function obtenerLiLista1() {
  var selected = document.querySelector(".selected");

  var padre = selected.parentNode.parentNode;

  var hijos = padre.children;

  return hijos;
}

function addClases() {
  var hijos = obtenerLiLista1();

  for (let i = 0; i < hijos.length; i++) {
    let hijo = hijos[i].firstChild;
    hijo.classList.add("element-" + (i + 1));
  }
  return hijos;
}

function borrarPares() {
  let elementos = document.querySelectorAll("li");
  elementos[1].remove();
  elementos[3].remove();
}

function lista2() {
  var list1 = obtenerLiLista1();
  var list2 = document.getElementById("list2");

  let boton1 = document.createElement("button");
  let boton2 = document.createElement("button");
  let boton3 = document.createElement("button");

  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");

  boton1.appendChild(list1[0].firstChild);
  boton2.appendChild(list1[2].firstChild);
  boton3.appendChild(list1[4].firstChild);

  li1.appendChild(boton1);
  li2.appendChild(boton2);
  li3.appendChild(boton3);

  list2.appendChild(li1);
  list2.appendChild(li2);
  list2.appendChild(li3);
}

function onLoad() {
  console.log("hi");
  addClases();
  lista2();
  borrarPares();
}
