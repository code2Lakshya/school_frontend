'use client'
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import './page.css';
import Loader from "../components/Loader/Loader";
import Card from "../components/Card/Card";

const SchoolPage = () => {

    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        fetch(process.env.NEXT_PUBLIC_BASE_URL + '/allschool')
            .then(response => response.json())
            .then(res =>{
                setData(res.response);
                setLoader(false);
                window.scrollTo(0,0);
            })
            .catch(error => {
                console.log(error.message);
                setLoader(false);
            })
    }, [])

    return (
        <div className="school-details-page">
            <Navbar />
            <div className="school-details">
                {
                    loader ?
                        <Loader />
                        :
                        !data
                            ?
                            <p id='nodata'>No Data Found</p>
                            :
                            <div className="school-cards">
                                {
                                    data.map((item, index) => <Card key={index} data={item} />)
                                }
                            </div>
                }
            </div>
        </div>
    );
}
export default SchoolPage;