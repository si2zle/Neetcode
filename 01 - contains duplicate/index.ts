function containsDuplicate(nums: number[]): boolean {
    // create a set from nums
    const set = new Set(nums);
    // check if the set size is the same as the nums length, if it is, then there are no duplicates
    return set.size !== nums.length;
}

function containsDuplicateOptionTwo(nums: number[]): boolean {
    // create a new set
    const set = new Set();
    for (let num of nums) {
        // check if the current num is in the set
        if (set.has(num)) {
            return true;
        }
        // add the current num to the set
        set.add(num);
    }
    return false;
}
