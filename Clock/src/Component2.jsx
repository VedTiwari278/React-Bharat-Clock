export default function Component2(){
  let time=new Date();
  return <p className="fw-bold">This is the Current time :{time.toLocaleDateString()}  - {time.toLocaleTimeString()}</p>
}