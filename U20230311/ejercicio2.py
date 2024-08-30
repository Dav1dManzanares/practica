matriz = [
    [
        [9,2,5],
        [4,6,2],
        [0,4,5],
        [9,5,3]
    ],
    [
        [9,2,5],
        [4,6,2],
        [0,4,5],
    ],
    [
        [9,2,5],
        [4,6,2],
        [0,4,5],
    ]
]

#print(matriz)

nota = [
    [9,7,6,3,4],
    [9,5,8,5,6],
    [10,5,7,7,8]
]

promedio = [(sum(notas) / len(notas)) for notas in nota]
print(promedio)