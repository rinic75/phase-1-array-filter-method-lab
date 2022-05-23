// Code your solution here
function findMatching(arr, driver) {
    return arr.filter(name => name.toUpperCase() === driver.toUpperCase())
}

function fuzzyMatch(arr, driver) {
    return arr.filter(name => name.substring(0,driver.length) === driver)
}

function matchName (arr, driver) {
    return arr.filter(item => item.name === driver)
}
