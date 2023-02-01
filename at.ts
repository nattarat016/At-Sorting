const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(`original: ${numbers}`)

function bubleSort(arr: number[]) { // O(n^2)
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let hold = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = hold
            }
        }
    }
}

bubleSort(numbers)
console.log(`bubleSort: ${numbers}`)


// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// console.log(`original: ${numbers}`)

// function selectionSort(arr: number[]) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i
//         let holding = arr[i]
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         arr[i] = arr[minIndex]
//         arr[minIndex] = holding
//     }
// }
// selectionSort(numbers)
// console.log(`selectionSort: ${numbers}`)



// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// console.log(`original: ${numbers}`)

// function insertionSort(arr: number[]) { //O(n^2)
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[0]) {
//             const holding = arr.splice(i, 1)
//             arr.unshift(...holding)
//         } else {
//             if (arr[i] < arr[i - 1]) {
//                 for (let j = 1; j < i; j++) {
//                     if (arr[i] >= arr[j - 1] && arr[i] < arr[j]) {
//                         arr.splice(j, 0, ...arr.splice(i, 1))
//                     }
//                 }
//             }
//         }
//     }
// }

// insertionSort(numbers)
// console.log(`selectionSort: ${numbers}`)


// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// console.log(`original: ${numbers}`)

// function mergeSort(arr: number[]): number[] {
//     if (arr.length === 1) {
//         return arr
//     }

//     const middle = Math.floor(arr.length / 2)
//     const left = arr.slice(0, middle)
//     const right = arr.slice(middle)

//     return merge(mergeSort(left), mergeSort(right))
// }


// function merge(left: number[], right: number[]): number[] {
//     const result = []
//     let leftIndex = 0
//     let rightIndex = 0

//     while (leftIndex < left.length && rightIndex < right.length) {
//         const leftValue = left[leftIndex]
//         const rightValue = right[rightIndex]
//         if (leftValue < rightValue) {
//             result.push(leftValue)
//             leftIndex++
//         } else {
//             result.push(rightValue)
//             rightIndex++
//         }
//     }
//     const remainingLeft = left.slice(leftIndex)
//     const remainingRight = right.slice(rightIndex)
//     const remaining = remainingLeft.concat(remainingRight)
//     return result.concat(remaining)
// }

// const sort = mergeSort(numbers)
// console.log(`mergeSort: ${sort}`)



// //const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [99, 6, 44, 2];
// console.log(`original: ${numbers}`)
// //arr = [2, 6, 44, 99]
// //stack


// function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1) {
//     if (left > right) { //  4 > 3
//         return arr
//     }
//     const pivot = right //pivot = 3
//     const partitionIndex = partition(arr, pivot, left, right) //partitionIndex = 3
//     quickSort(arr, left, partitionIndex - 1)
//     quickSort(arr, partitionIndex + 1,)
// }

// function partition(arr: number[], pivot: number, left: number, right: number) {
//     const pivotValue = arr[pivot]
//     let partitionIndex = left
//     for (let i = left; i < right; i++) {
//         if (arr[i] < pivotValue) {
//             swap(arr, i, partitionIndex)
//             partitionIndex++
//         }
//     }
//     swap(arr, right, partitionIndex)
//     return partitionIndex
// }


// function swap(arr: number[], index1: number, index2: number) {
//     const holding = arr[index1]
//     arr[index1] = arr[index2]
//     arr[index2] = holding
// }

// quickSort(numbers)
// console.log(`quickSort: ${numbers}`)