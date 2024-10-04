import { GiftCard } from "../ui/GiftCard/GiftCard"
import { useAppSelector } from "../../hooks/redux"




export const GiftList = () => {
  const gift = useAppSelector((state)=>state.gift.gift)
  
  return (
    <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2vh'
    }}
    >
      {
        gift.map((el, index)=>(
          <GiftCard gift={el} key={index} />
        ))
      }
    </div>
  )
}
