import axios from "axios";


const getData = async ()=>{
    const res = await axios.get('https://fakestoreapi.com/products/1');
    // console.log(res);
    return res.data;
};

export default getData;