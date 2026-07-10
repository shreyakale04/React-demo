 import Card from "./components/Card"
const App = () => {
  return (
    <div className='parent'>
      <Card user='Shreya' age={21} img= "https://media.istockphoto.com/id/2223715503/photo/abstract-financial-data-visualization-with-digital-stock-market-graphs.jpg?s=1024x1024&w=is&k=20&c=w4tIzO4qlBObfOtEIkH1RJXzMROs4ODqPN0kvJdl7rY=" />
      <Card user= 'Divya' age={23} img= "https://media.istockphoto.com/id/2232843523/photo/ui-ux-design-and-development-concepts-developers-interact-with-cutting-edge-virtual-screens.jpg?s=1024x1024&w=is&k=20&c=HjA1UYzM2Udeu0S0FZnnLmNcI4MukG-zAuttuSr2go0=" />
       </div>
  )
}

export default App
