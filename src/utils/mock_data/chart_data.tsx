const labels = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
const createUserData = (n: number) => {
    let marks = [];
    let curDate = new Date();
    for (let i = 0; i < n; i++) {
        marks.push({
            id: i,
            date: labels[i], //curDate.setDate(curDate.getDate() + i),
            userMarks: Math.floor(Math.random() * 80)
        })
    }
    return marks;
}

export const chartData = createUserData(7);
export const chartData2 = createUserData(7);
export const chartData3 = createUserData(7);


// export const donutChartData = ['Комментарии','Посты','Картинки'].map((el, i) => {
//     return ({
//         id: i,
//         type: el,
//         marks: Math.floor(Math.random() * 80)
//     })
// })

export const donutChartData = [
    {
        id: 1,
        type: "Комментарий",
        marks: chartData.map(data => data.userMarks).reduce((partialSum, a) => partialSum + a, 0)
    },
    {
        id: 2,
        type: "Посты",
        marks: chartData2.map(data => data.userMarks).reduce((partialSum, a) => partialSum + a, 0)
    },
    {
        id: 3,
        type: "Картинки",
        marks: chartData3.map(data => data.userMarks).reduce((partialSum, a) => partialSum + a, 0)
    }
]
