import React from 'react'

export const getServerSideProps = async (context) => {
    console.log(context)
    const response = await fetch(`http://localhost:3000/api/fruits/${context.params.name}`).then(res => res.json())

    return {
        props: {response}
    }
}

function  name(props) {
    console.log(props)
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
