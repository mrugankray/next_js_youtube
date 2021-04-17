import React from 'react'

export const getStaticProps = async (context) => {
    return {
        props: {random: Math.random()}
    }
}

function random(props) {
    return (
        <div>
            {props.random}
        </div>
    )
}

export default random
