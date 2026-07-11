import RightCard from "./RightCard"


const RightContent = (props) => {
    console.log(props);
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-7 w-2/3'>
    {props.users.map(function (elem,idx) {
       
       return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} colour={elem.colour} />
    }
  )
}
   
    
    </div>
  )
}

export default RightContent
