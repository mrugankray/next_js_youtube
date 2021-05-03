import React from 'react'

export const getStaticProps = async(context) => {
    return {
        props: {random: Math.random()},
        revalidate: 10
    }
}

// sec:       0  1  10 11 12
//  visitors: 1  2  3  4  5
// verison:   1  1  1  1  2

function random(props) {
    return (
        <div>
            {props.random}
        </div>
    )
}

export default random
