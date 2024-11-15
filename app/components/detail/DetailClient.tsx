"use client";

import { useState } from "react";
import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import Counter from "../general/Counter";
import { Rating } from "@mui/material";

export type CardProductProps = {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    stock: boolean;
};

const DetailClient = ({ product }: { product: any }) => {
    const [cardProduct, setCardProduct] = useState<CardProductProps>({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: 1,
        image: product.images && product.images[0] ? product.images[0].image : "",
        stock: product.inStock
    });

    const increaseFunc = () => {
        if (cardProduct.quantity === 10) return;
        setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
    };

    const decreaseFunc = () => {
        if (cardProduct.quantity === 1) return;
        setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
    };

    let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length

    const primaryImage = product.images && product.images[0] ? product.images[0].image : "";

    return (
        <div className="my-10">
            <PageContainer>
                <div className="block md:flex gap-10 justify-center">
                    <div className="relative h-[400px] w-[400px]">
                        <Image src={primaryImage} fill alt={product.name} className="object-contain" />
                    </div>
                    <div className="w-1/2 space-y-3">
                        <div className="text-xl md:text-2xl">{product?.name}</div>
                        <Rating name="read-only" value={productRating} readOnly />
                        <div className="text-slate-500">{product?.description}</div>
                        <div className="flex items-center gap-2">
                            <div>STOK DURUMU:</div>
                            {product.inStock ? (
                                <div className="text-green-500">Ürün Stokta Mevcut</div>
                            ) : (
                                <div className="text-red-500">Ürün Stokta Bulunmamaktadır</div>
                            )}
                        </div>
                        <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} cardProduct={cardProduct} />
                        <div className="text-lg md:text-2xl text-orange-600 font-bold">{product.price} $</div>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
};

export default DetailClient;
