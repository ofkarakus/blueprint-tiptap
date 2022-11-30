export const move = (arr: any[], from: number, to: number) => {
    const newArr = [...arr];
    let from_ = from < 0 ? 0 : from >= newArr.length ? newArr.length - 1 : from;
    let to_ = to < 0 ? 0 : to >= newArr.length ? newArr.length - 1 : to;
    const item = newArr.splice(from_, 1)[0];
    newArr.splice(to_, 0, item);
    return newArr;
};

export const capitalize = (text: string) => {
    return text[0].toUpperCase() + text.slice(1);
};

export function removeItem<T>(arr: Array<T>, index: number): Array<T> {
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

export function addItem<T>(arr: Array<T>, index: number, item: T): Array<T> {
    if (index > -1) {
        arr.splice(index, 0, item);
    }
    return arr;
}
