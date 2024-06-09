import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Flex } from '@chakra-ui/react'
import { GridLoader } from 'react-spinners'
import { getProductById } from '../../Data/asyncMock'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then((data) => setProducto(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])


    return (
        <>
            {
                loading ?
                    <Flex justify={'center'} align={'center'} h={'50vh'}>
                        < GridLoader color="#D40B0B" />
                    </Flex >
                    :
                    <ItemDetail {...producto} />
            }

        </>
    )

}

export default ItemDetailContainer