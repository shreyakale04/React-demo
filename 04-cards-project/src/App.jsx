import Card from "./components/Card"

const App = () => {
 
  const jobOpenings = [
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?r=0&pid=Api&P=0&h=180",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.NvurYtTcbcbdJqGzvggUVgHaEK?r=0&pid=Api&P=0&h=180",
    company: "Apple",
    datePosted: "5 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$72/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://denseagency.com/wp-content/uploads/2023/04/Blog-8.jpg",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/a9/63/b3/a963b31cb9910acd1674d0745542fa4c.jpg",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.AKyCP44z4UUp2gqH8BTf3QHaGB?r=0&pid=Api&P=0&h=180",
    company: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.k-SSSrjNRDim54CUWJk3DAAAAA?r=0&pid=Api&P=0&h=180",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/nvidia-corporation-american-technology-company-incorporated-delaware-based-santa-clara-california-nvidia-company-134923745.jpg",
    company: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.mos.cms.futurecdn.net/DtGtLda47VdS8pE2iJLbBZ.jpg",
    company: "Adobe",
    datePosted: "3 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/uber/uber_PNG26.png",
    company: "Uber",
    datePosted: "10 days ago",
    post: "Full Stack Engineer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://www.enriquedans.com/wp-content/uploads/2023/01/OpenAI-logo.jpg",
    company: "OpenAI",
    datePosted: "1 day ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "San Francisco, USA"
  }
];
  return (
    <div className='parent'>
   {jobOpenings.map(function(elem,idx){

    return <div key={idx}>
      <Card company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1}brandLogo={elem.brandLogo} pay={elem.pay}tag2={elem.tag2}/>

    </div>
   })}
   
      
    </div>  
   
  )
}

export default App
