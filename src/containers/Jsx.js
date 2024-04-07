let name='Priyanshu';
function CheckEvenOrOdd(num){
  if (num%2===0){
    return <div>Even</div>
  }
  else{
    return <div>Odd</div>
  }
}
const users=[
  {name:'ram',age:34},
  {name:'mohan',age:24},
  {name:'sham',age:23},
  {name:'rohit',age:67}
]

let num=6;

function Jsx() {
  return (
    <div className="App">
      <h2>Booga BOOGA {name}</h2>
      <div>
      <h2>If Else Statements</h2>
      {CheckEvenOrOdd(19)}
      {num % 2===0 ? <div>Even Number</div> : <div>Odd Number</div>}
      <h2>If only Statements</h2>
      {num%2===0 && <div>Even Number</div>}
      {num%2>0 && <div>Odd Number</div>}
      </div>
      <h3>loop</h3>
      {
        users.map((item, index)=>{return <div key={index}>{item.name}-{item.age}</div> } )
      }
      
    </div>
  )
}
export default Jsx;
export function Greet(){
    return(<p>Hellooo</p>)
}