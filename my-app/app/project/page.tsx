import Card from "./_components/card"
export default function Projects() {
  return (

    <div className="w-[100%]  bg-gradient-to-r from-cyan-700 to-black pt-[100px]">
      <div className="flex border-red outline-[2px] w-[100%] flex items-center justify-center flex-wrap">
        <Card name = "Full Stack" des = "Check out our full stack projects"/>
	<Card name = "Android" des = " check out our android projects"/>
	<Card/>
	<Card/>
	<Card/>
      </div>
    </div>
  );
}
