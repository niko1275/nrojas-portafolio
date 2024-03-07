import Image from "next/image"


export const DevImg = ({styles,img}) => {
  return (
    <div className={`${styles}`}>
        <Image src={img} width={400} height={400}  priority alt=""/>
    </div>
  )
}
