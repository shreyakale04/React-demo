import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"


const App = () => {
  
  const users = [
    {
      img: 'https://i.pinimg.com/originals/a8/e9/d2/a8e9d2b3d136df556dff6ffbe579cbb7.jpg',
      colour: 'Blue',
      intro: '',
      tag:'Satisfied'
    },
    {
      img: 'https://img.freepik.com/premium-photo/young-happy-professional-business-woman-employee-sitting-desk-working-laptop_1023984-68.jpg?w=2000',
      colour: 'LightGreen',
      intro: '',
      tag:'UnderServed'
    },
      {
      img: 'https://static.vecteezy.com/system/resources/previews/032/168/016/non_2x/coffee-job-males-happy-smile-office-men-person-indian-businessman-sitting-lifestyle-laptop-technology-manager-success-photo.jpg',
      colour: 'Black',
      intro: '',
      tag:'Underbanked'
    }
  ]
  return (
    <div >
     <Section1 users= {users}/>
       <Section2/> 
    </div>
  )
}

export default App
