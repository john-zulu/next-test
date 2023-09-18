import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'


export default function John({ time }: any) {
    return (
        <div>John - {time}
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Your browser is outdated!</AlertTitle>
                <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
            </Alert>
        </div>
    )
}

export const getServerSideProps = () => {
    return {
        props: {
            time: Date.now()
        }
    }
};
