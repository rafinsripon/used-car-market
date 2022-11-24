import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const categorys = useLoaderData();
    console.log(categorys)

    const {data: category } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/category/${category._id}`)
            const data = await res.json();
            console.log(data);
            return data
        }
    })
    return (
        <div>
            <h1>hello category{}</h1>
        </div>
    );
};

export default CategoryDetails;