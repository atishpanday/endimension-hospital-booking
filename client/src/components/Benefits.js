import React, {useState} from 'react'
import "./Benefits.css"
import useInterval from "react-useinterval"

const Benefits = () => {

    
    const headingItems = [
        "Easy booking anytime, anywhere", 
        "Highly experienced and qualified doctors", 
        "Fully equipped clinics all over India"
    ]
    const textItems = [
        "You can book an appointment with our doctors anytime through our user-friendly website. We will pre-allocate a time slot for you so that you never have to wait in line",
        "We pride ourselves of harbouring the best and the most experienced surgeons, dentists, nutritionists, oncologists and more from all over India.",
        "We have the best equipments in the country, from state of the art MRI machines, to extremely advanced X-Ray machines."
    ]
    const [heading, setHeading] = useState(headingItems[0])
    const [para, setPara] = useState(textItems[0])
    let i = 1
    useInterval(() => {
        setHeading(headingItems[i])
        setPara(textItems[i])
        i = i+1
        if( i === 3){
            i = 0
        }
    }, 5000)
    return (
        <div className="benefits-container">
            <div className="benefit-card">
                <div className="benefit-heading-container">
                    <h1 className="benefit-heading">{heading}</h1>
                </div>
                <div className="benefit-text-container">
                    <p className="benefit-text">{para}</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits
