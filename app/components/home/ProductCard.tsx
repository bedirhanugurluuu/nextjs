'use client'

import { Rating } from "@mui/material";
import Image from "next/image"
import textClip from "@/utils/TextClip";
import { useRouter } from "next/navigation";

const ProductCard = ({product}: {product: any}) => {
    const router = useRouter()

    let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length

    const primaryImage = product.images && product.images[0] ? product.images[0].image : null;
  return (
    <div onClick={() => router.push(`product/${product.id}`)} className="w-[240px] shadow-lg cursor-pointer flex flex-col flex-1 p-3 rounded-md">
        <div className="relative h-[150px]">
            {primaryImage ? (
                <Image src={primaryImage} fill alt={product.name || "Ürün Görseli"} className="object-contain" />
            ) : (
                <div className="h-[240px] bg-gray-200 flex items-center justify-center">
                    <span>Resim Yok</span>
                </div>
            )}
        </div>
        <div className="text-center mt-2 space-y-1">
            <div>{textClip(product.name)}</div>
            <Rating name="read-only" value={productRating} readOnly />
            <div className="text-orange-600 font-bold text-lg md:text-xl">{product.price} $</div>
        </div>
    </div>
  )
}

export default ProductCard