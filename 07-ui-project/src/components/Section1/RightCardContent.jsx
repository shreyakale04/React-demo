

const RightCardContent = (props) => {
  return (
   <div  className='absolute top-0 left-0 h-full w-full p-2 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-11 w-11 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-blue-50 leading-relaxed mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos culpa ipsam molestias, optio temporibus non repellat provident!</p>
        <div className= 'flex justify-between'>
        <button style={{backgroundColor:props.colour}} className=' text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
        <button className=' text-white font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-up-line"></i></button>
      </div>
    </div>
    </div>
  )
}

export default RightCardContent
