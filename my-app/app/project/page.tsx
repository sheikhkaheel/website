import Card from "./_components/card"
export default function Projects() {
  return (

    <div className="w-[100%] h-screen bg-linear-to-r from-cyan-700 to-black pt-[100px]">
      <div className="flex border-red outline-[2px] w-[100%] flex items-center justify-center flex-wrap">
        <Card name = "Full Stack" des = "We provide full end to end full stack web applications"/>
	<Card name = "Android" des = "We provide native android development"/>
	<Card/>
	<Card/>
	<Card/>
      </div>
    </div>
  );
}
