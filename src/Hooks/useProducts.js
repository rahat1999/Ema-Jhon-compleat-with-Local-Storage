import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("../products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    //return nessary things
    return [products];
}

export default useProducts;