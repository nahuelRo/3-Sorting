describe("Split Array function", function () {
  it("es capaz de dividir un arreglo par en dos partes", function () {
    let arreglo = split([1, 2, 3, 4]);
    let [posicion1, posicion2] = arreglo;
    expect(posicion1).toEqual([1, 2]);
    expect(posicion2).toEqual([3, 4]);
  });

  it("es capaz de dividir un arreglo impar en dos partes", function () {
    let arreglo = split([1, 2, 3, 4, 5]);
    let [posicion1, posicion2] = arreglo;
    expect(posicion1).toEqual([1, 2]);
    expect(posicion2).toEqual([3, 4, 5]);
  });
});

describe("Merge function", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("mergeSort function", function () {
  it("es capaz de recibir un Arreglo desordenado y retornarlo ordenado", function () {
    expect(mergeSort([8, 4, 3, 1, 2, 5, 6, 9, 7, 10])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});
