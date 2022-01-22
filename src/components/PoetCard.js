
const PoetCard=(props)=>{
    const RAND_POEMS_API=`https://ganjgah.ir/api/ganjoor/poem/random?poetId=${props.id}`
const IMAGE_API="https://ganjgah.ir/api/ganjoor/poet/image";
    console.log(RAND_POEMS_API);
    // const poetClickHandler=()=>{

    // }
    return(
        <div className="PoetCard">
            <a href='#' >
                <img src={`${IMAGE_API+props.fullUrl}.gif`}></img>
                <h1>{props.name}</h1>
            </a>
        </div>
    )
    
}
export default PoetCard;