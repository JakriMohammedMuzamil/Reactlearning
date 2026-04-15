import React from 'react'
import './index.css';
import Card from './components/Card';

const App = () => {

 const jobOpenings = [
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAflBMVEX///8AAAD8/Pz09PTk5OT5+fnExMTQ0NDu7u7IyMi9vb3c3Nzx8fEZGRl1dXU9PT0lJSUsLCxlZWUeHh6srKy0tLRgYGBJSUkTExMyMjKRkZHe3t5VVVWZmZnPz88qKiqioqKDg4NQUFB5eXltbW2SkpKbm5tFRUU7Ozt+fn6nRY4fAAAEWElEQVR4nO2d23biMAxFYyCQhBJKG2i4dCZQevv/H5yBtIXgAC2RK6/D2c95kM7yRZZkJwgIIYQQQgghhBBCCCGEEEIIIYT4QqebtbVt8J92kubGmJ62Hb7TWQ7Mlq62JX4TpeYTKnWKwuzg7DtOtNoTysy1zfGXeF8nk0fa9njLuCKUGWrb4y1ZVSiTahvkK8mBUCbRtshT+odCmVDbJD8Jbw+Fmmib5Clra0j90TbJT/5YQr1qm+QpU0sprue1jC2hHrRN8pShpVRf2yQ/iS2hZtomeYq18a20LfKUljWkeDauxwoROtoW+cojV/NvsqjolHNEHWW0L9SkpW2Ox+R7Qo21jfGZcKfT8kbbGL/5GFOjZxaNz7Ay+XQy63GBOksrDKlShdbNPB5nWdKPTgvT7mWzdDKZpLOi27m+HHGUpLuMwfA9ObYm9V+q4dVoPb6qs0236v6GdWx/FhV2Sm8TY11L3b01vq/z3wweK+F42J3UfrYdhFfRzdGtHScld8nnOtSfWdWZ6riCP+SEdtXlQKws7iXL0Zmv/pNpu+KWXv3Eu4gUOZawSuiNWOGGDIdNGU0ZokolLZQxC8wJKDv1SiBbhXoOhDKm0HZLHrt7RYIcsAqfnnf75ywAU1hdF0IhlpZbJ44wF1Noe+UC+QAB9DhjF9Cb86LtlBMcDCnISKqux64pU8yDjN222RjQZoUncaGW2i65IRRMSpXkmHPPweTD3PeC4FlcKdR+hQdpoUAjhCCQFgr2Zoh9raop2h65QjzXeaftkSsOO1wbU2h75ArxuBO21G53azQEttD+Kq0UajQlnkjIAZPnJd/oxvgR97BK/RVWagCrlHihD3adkh5TuJfYxFPDoPlOB1EC7GUa8cgTNDVc955GQ960PXLFTFop2M1PviwKWWcPXLS5oL7IMRdXCvYZRnmlULOeDnqnQAeVfLHdTLV9coOLNrNnbaecIF/GMqA1v7Z4B8cGyGz68SuNDbhFjNSL835fwAgwT+Ug9twCmKgST3t+gJepWjpSytyhVR/c3MPakoFd8XMSJ5SMsKagfDZvB9bLjK52vw1YYypYnff4UsA6ru2nhKVAa49t5ed9vgy4VJWrNR3vlyE3jpQCW883vDsRagC2nm/oOFEK8gaNk0EFdpYpiRwIVWg75Qb57W8EuEptaImfkwHfKimRvkGD2p8QiJceIMszJbLh56O2Oy6RPCjDtuaVCPYoAM+9DXKPBhXarrhGKvu50HbEPTIFZdzLM3uIdF3D5e/qCAUqytABwo7mUdWTtgu/RdOS8hWs5p80OwDipc5PcFyq24dJ+v60Xrwd/WIFmb07iv3fx+20KuZfu38UL2uzNGtNszXoWBe5By9Wk11sl56L3zdVneqzVIv6rFxnOdj/6g6wY/EbRF9/tXh4PH7cbSfpxywczea/aJ1ndJIsG/fOZsPb/TjuIfYKE0IIIYQQQgghhBBCCCGEEEKIR/wDbn44CF+9YWcAAAAASUVORK5CYII=",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];

  return (
    <div className='parent'>
       {jobOpenings.map((job, index) => (
        <Card 
          key={index}
          brandLogo={job.brandLogo} 
          companyName={job.companyName} 
          datePosted={job.datePosted} 
          post={job.post} 
          tag1={job.tag1} 
          tag2={job.tag2} 
          pay={job.pay}
          location={job.location}
        />
        ))}
    </div>
  )
}

export default App
