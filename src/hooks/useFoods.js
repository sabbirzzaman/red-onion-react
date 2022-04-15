import { useEffect, useState } from "react";

const useFoods = (dataPath) => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(dataPath)
            .then((res) => res.json())
            .then((data) => setFoods(data));
    }, []);

    return [foods, setFoods]
}

export default useFoods;