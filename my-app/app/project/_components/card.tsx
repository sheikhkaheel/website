export default function Card(props){
    return(
	<div className=" flex flex-col items-start px-[70px] py-[15px] m-[40px] color bg-linear-to-r from-cyan-900 to-black text-white shadow-black shadow-2xl basis-[40%] rounded-lg">	
	<div className="outline-[2px] border-white h-[300px] w-[100%]">image goes here</div>
	<div className="text-white text-[40px]">{props.name}</div>
	<div className="text-white">{props.des}</div>
	</div>
    );

};
