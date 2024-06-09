import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css';
import { ToastContainer, toast } from 'react-toastify';
import { Box, Image } from '@chakra-ui/react';

const ItemDetail = ({ nombre, precio, descripcion, img, stock }) => {

    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity} unidades`)

    }

    return (
        <Box className='box-detail'>
            {nombre}
            ${precio}
            <Image src={img}
                    alt={nombre}
                    borderRadius='md'
                    boxSize='100%'
                    objectFit='cover'
                    w={'300px'}
                    h='300px' />
            <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
            <Box className='descripcion'>
                <p>Descripción:</p>{descripcion}
            </Box>
            <ToastContainer />
        </Box>
    )
}

export default ItemDetail