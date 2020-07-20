export function getPriceTicks(chartData, nbOfTicks) {
    const minPrice = chartData.reduce((min, dataPoint) => (dataPoint.close !== null && dataPoint.close < min) ? dataPoint.close : min, Number.MAX_SAFE_INTEGER);
    const maxPrice = chartData.reduce((max, dataPoint) => dataPoint.close > max ? dataPoint.close : max, Number.MIN_SAFE_INTEGER);

    const minRoundedToEven = 2 * Math.floor(minPrice / 2); // first label

    const spread = maxPrice - minRoundedToEven;
    const step = spread / (nbOfTicks - 1);

    let stepRounded;
    if (0.5 < step <= 1) {
        stepRounded = 1;
    }
    if (step <= 0.5) {
        stepRounded = (Math.ceil(step * 20) / 20).toFixed(2); // round to upper  0.05
    }
    else {
        stepRounded = 2 * Math.ceil(step / 2); // round to upper even number
    }

    const ticks = Array(nbOfTicks).fill(0).map((tick, index) => ((index * stepRounded) + minRoundedToEven).toFixed(2));
    return ticks;
}