async function bubbleSort(array, sleepTimeMS) {
    totalComparisons = 0;
    var length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            await colorTwoElements(array, j, j + 1, 1); // color red before swap
            totalComparisons++;
            displayComparisonCount(totalComparisons);
            if (array[j].val > array[j + 1].val) {
                swap(array, j, j + 1);
            }
            await new Promise(resolve => setTimeout(resolve, sleepTimeMS));
            await colorTwoElements(array, j, j + 1, 0); // reset to blue
        }
        await colorOneElement(array, length - i - 1, 2); // color green, now in place
    }
    // once complete we iterate through and set all bars to green
    for (let i = 0; i < array.length; i++) {
        await new Promise(resolve => setTimeout(resolve, sleepTimeMS / 2));
        await colorOneElement(array, i, 3);
    }
};