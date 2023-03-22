export const Login = ()=>{

    let nombre = 'pepito'
    const saludar = () =>{
         console.log('hola como estan');
    }
    
    return <div> <h1>Hola desde el componentes Login</h1>
            <h3>Mi nombre es {nombre} </h3>
            <button onClick={saludar}>Saludar</button>
            </div>
            
}