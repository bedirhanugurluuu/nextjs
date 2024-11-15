import Image from "next/image"

const Banner = () => {
  return (
    <div className="h-[237px] bg-cyan-500 flex items-center justify-center">
        <div className="h-[137px] relative w-full">
            <Image className="object-cover" src={"/banner.jpeg"} fill alt="" />
        </div>
    </div>
  )
}

export default Banner