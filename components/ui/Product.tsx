import React from 'react';
import Link from "next/link";

interface ProductProps {
    id: number,
    title: string,
    url: string,
    price: number,
}

const Product = ({ id, title, url, price }: ProductProps) => {
    return (
        <Link href={`/product/${id}`}
              className="max-w-[200px] p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl bg-gray-100 rounded mx-auto"
        >
            {url ? <img src={`${url}/190`} alt={title} /> : null}
            <div className="pt-2 px-1">
                <div className="font-semibold text-[15px] hover:underline cursor-pointer">
                    {title}
                </div>
                <div className="font-extrabold">{(price/100).toFixed(2)}</div>
                
                <div className="relative flex items-center text-[12px] text-neutral-500">
                    <div className="line-through">{((price * 1.2) / 100).toFixed(2)}</div>
                    <div className="px-2">-</div>
                    <div className="line-through">20%</div>
                </div>
            </div>
        </Link>
    );
};

export default Product;