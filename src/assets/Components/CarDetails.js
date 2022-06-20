const CarDetails = ({brand, km, color, user, newCar}) => {
    return (
        <>
            <div>
                <h3>Detalhes do carro de {user}</h3>
                <ul>
                    <li>Marca: {brand}</li>
                    <li>Quilometragem: {km}</li>
                    <li>Cor: {color}</li>
                    <li>Estado: {newCar ? 'Novo' : 'Usado'}</li>
                </ul>
            </div>
        </>
    )
}

export default CarDetails