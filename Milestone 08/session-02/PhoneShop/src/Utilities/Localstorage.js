import swal from 'sweetalert';

const getStoredData = () => {
    const data = localStorage.getItem('fovorite');
    if (data) {
        return JSON.parse(data)
    }
    else {
        return []
    }
}


const saveToLS = (id) => {
    const datas = getStoredData();
    let exist = datas.find(data => data == id)
    if (!exist) {
        swal("Good job!", "Successfully added!", "success");
        datas.push(id)
        localStorage.setItem('fovorite', JSON.stringify(datas))
    } else {
        swal("Sorry", "Already exists!", "error");
    }
}

export { getStoredData, saveToLS }