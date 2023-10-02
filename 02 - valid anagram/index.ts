function isAnagram(s: string, t: string): boolean {
    // sort the first string
    const sortedS = s.split("").sort().join("");
    // sort the second string
    const sortedT = t.split("").sort().join("");
    // compare the two strings
    return sortedS === sortedT;
}
