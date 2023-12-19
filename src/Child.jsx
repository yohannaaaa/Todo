export default function Child({GenerateRandomNumbers}){
    return(
        <div>
           <button
           onClick={GenerateRandomNumbers}
           > Generate</button>
           
        </div>
    )
}