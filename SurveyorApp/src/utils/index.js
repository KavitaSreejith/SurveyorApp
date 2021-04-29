export const getAvarageRate = questionResponse => {
    const { sum, count } = questionResponse.reduce(
        (acc, curr) => {
            if (!!curr.response_content) {
                acc.sum += +curr.response_content
                acc.count++
            }
            return acc
        },
        { count: 0, sum: 0 }
    )

    return Math.round((sum / count) * 100) / 100
}

export const isEmptyObj = obj => Object.keys(obj).length === 0

export const floatToPercent = (number, n) =>
    `${Math.floor(number * Math.pow(10, 2 + n)) / Math.pow(10, n)}%`
