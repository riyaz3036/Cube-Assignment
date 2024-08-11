import React,{useEffect,memo} from 'react'
import './image-grid.css'
import useFetch from '../../Hooks/useFetch'
import {BASE_URL} from '../../Utils/config'

interface Image {
    url: string;
    _id: string;
    __v: string;
}

const ImageGrid = () =>{

    const { data: images, loading, error, fetchData } = useFetch<Image[]>(`${BASE_URL}/api/images/random`);

    useEffect(() => {
        fetchData(); 

        const intervalId = setInterval(() => {
        fetchData();
        }, 10000); 

        return () => clearInterval(intervalId); 
    }, [fetchData]);
    
    return(
        <div className="customer_details_images">
        {error && (<p>{error}</p>)}
        {!loading && !error &&
          images?.map((image:Image) => (
            <div key={image._id} className="customer_details_display_img">
              <img src={`${BASE_URL}${image.url}`} alt="display-image" />
            </div>
          ))
        }
      </div>
    )
}

export default memo(ImageGrid);