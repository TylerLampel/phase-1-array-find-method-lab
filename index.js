function superbowlWin(record) {
    const resultFoo = function(record){
        if (record.result === "W"){
            return record.year
        }
    }
    if (record.find(resultFoo) === undefined) {
    return undefined
    } else {
        return record.find(resultFoo).year
    }
}
