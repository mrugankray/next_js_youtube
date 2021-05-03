import React from 'react'
import { useRouter } from "next/router"

export const getStaticProps = async (context) => {
    console.log(context)
    const response = await fetch(`http://localhost:3000/api/fruits/${context.params.name}`).then(res => res.json())

    return {
        props: {response}
    }
}

export const getStaticPaths = () => {
    return {
        paths: [
            {params: {name: "apple"}}
        ],
        fallback: "blocking"
    }
}

function  name(props) {
    console.log(props)
    const router = useRouter()
    if(router.isFallback) {
        return (<h1>Loading</h1>)
    }
    return (
        <> 
            <div>
                Fruit name: {props.response.name}
            </div>
            <br />
            <div>
                Fruit Calories: {props.response.nutritions.calories}
            </div>
        </>
    )
}

export default name
