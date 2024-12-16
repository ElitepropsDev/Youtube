export const API_KEY = 'AIzaSyA2dOfg58L4e9yHbcC5JIH1CPwiiQJe6lA'
export const value_converter = (value) =>{
    if (value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}