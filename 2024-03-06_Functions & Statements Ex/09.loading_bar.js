function solve(progress) {

    const renderProgressBar = (progress) => `[${'%'.repeat(progress / 10)}${'.'.repeat((100-progress)/10)}]`
    const renderProgress = (progress) => `${progress}% ${renderProgressBar(progress)}`

    console.log(renderProgress(progress))
    if (progress === 100) {
        console.log('100% Complete!');
    } else {
        console.log('Still loading...')
    }
}

solve(30);
solve(100);