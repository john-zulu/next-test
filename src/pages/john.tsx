import React from 'react'

export default function John({ time }: any) {
    return (
        <div>John - {time}</div>
    )
}

export const getServerSideProps = () => {
    return {
        props: {
            time: Date.now()
        }
    }
};
