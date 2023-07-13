describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("Un Arreglo desordenado que termine ordenado.", function () {
    expect(bubbleSort([4, 1, 2, 3])).toEqual([1, 2, 3, 4]);
  });
  it("Un Arreglo ordenado que debe mantenerse ordenado.", function () {
    expect(bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
  it("Un Arreglo a la inversa ([4,3,2,1]) que termine ordenado.", function () {
    expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });
});

describe("swap", function () {
  it("en el peor de los casos serian 16 pasos", function () {
    spyOn(window, "swap").and.callThrough();
    window.bubbleSort([4, 3, 2, 1]);
    expect(window.swap.calls.count()).toEqual(16);
  });
});
