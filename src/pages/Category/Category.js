import React,{useEffect,useState} from 'react'
import CategoryCommanCard from './CategoryCommanCard';
import emtyDataimg from "../images/sorryNotFound.png"
import { useParams } from 'react-router';
import axios from 'axios';

const Category = () => {
  const category =useParams().category
  console.log(category)
      // state for loader
  const [Isloader, setIsloader] = useState(false);
  // here is a get user all product api
  const [getUserData, setUserData] = useState([]);
  //  console.log("getuserdata",getUserData)
  useEffect(() => {
    getCategoryDataApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    const getCategoryDataApi = async () => {
        const token = JSON.parse(localStorage.getItem("token"));
        try {
          // console.log(category)
          setIsloader(true)
          const response = await axios.get(
            `https://apple-e-commerce.herokuapp.com/api/get/category/product/${category}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("category response=", response);
          setIsloader(false)
          setUserData(response.data.data);
          //  alert(response.data.error)
        } catch (error) {
          setIsloader(false)
          console.log("error=>", error.response);
          alert(error.response.data.error);
        }
      };
    return (
        <>
        <h1 className="text-center m-4">All Apple {category}</h1>
         <div className="d-flex flex-wrap text-center justify-content-center">
          {/*cards*/}
          {getUserData && getUserData.length !== 0 ? (
            getUserData.map((item) => {
              return (
                <>
                  <CategoryCommanCard key={item._id} Allitem={item} />
                </>
              );
            })
          ) : (
            <div className="text-center m-4">
            <img src={emtyDataimg} alt="EmtyData"/>
            <h5 className="text-center text-danger m-2">Sorry Product Not Found</h5>
          </div>
          )}
        </div>
            
        </>
    )
}

export default Category
