export const Colors = {
    blue: '#347eff',
    deepBlue: '#61dafb',
    green: '#28a745',
    red: '#dc3545',
    gray: '#555',
    lightGray: '#efefef',
    white: '#fff',
}

export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'
export const TYPE_INCOME = 'income'
export const TYPE_OUTCOME = 'outcome'

//补零
export const padLeft = (n)=>{
    return n<10?'0'+n:n
}

//生成随机数
export const range = (size,startAt = 0)=>{
    const arr = []
    for(let i = 0; i<size;i++){
        arr[i] = startAt+i
    }
    return arr
}