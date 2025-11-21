import "./ImageGenerator.css"
import React, { useRef, useState } from 'react'
import default_img from "../assets/main.jpg"

const ImageGenerator = () => {

    const [imageUrl,setImageUrl] = useState("/");
    const [loading,setLoading] = useState(false)
    let input_ref = useRef(null);

    const imageGenerator = async ()=>{
        if (input_ref.current.value==="") {
            return 0;
        }
        setLoading(true);
        setImageUrl("/");
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${process.env.REACT_APP_OPENAI_API_KEY }`,
                    "User-Agent":"Chrome",
                },
                body:JSON.stringify({
                    prompt:`${input_ref.current.value}`,
                    n:1,
                    size:"512x512",
                }),

            }
        );
        let data = await response.json();
        let data_array = data.data;
        setImageUrl(data_array[0].url);
        setLoading(false)
    }

  return (
    <div className="ai-image-generator">
      <div className="header">
        AI Image <span>Generator</span></div>
        <div className="img-loading">
            <div className="image">
                <img src={imageUrl === "/" ? default_img : imageUrl} alt="" /></div>
        <div className="loading">
            <div className={loading?"loading-full" : "loading-bar" }>
                <div className={loading ? "loading-text" : "display-none"}>Loading...</div>
            </div>
        </div>
        </div>

        <div className="search-box">
            <input ref={input_ref} type="text" className="search-input" placeholder="Describe your image.." />
            <div onClick={()=>{imageGenerator()}} className="generate-btn">Generate</div>
        </div>
    </div>
  )
}

export default ImageGenerator
