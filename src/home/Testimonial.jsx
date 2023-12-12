import Marquee from "react-fast-marquee";

const Testimonial = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold  text-green-400">What clients say</h1>
            <p className=" text-center py-7"> They are your most popular client consectetur adipisicing elit. Sunt a
                alias recusandae placeat dolorum unde <br />
                quae minus ratione dicta molestiae possimus saepe nam, quia quis
                maiores ex nihil tempore voluptatum!</p>
            <Marquee pauseOnHover={true} speed={50} direction="right">
                <div className="grid grid-cols-3 gap-10 ">
                    <div className=" w-96 bg-base-200 h-96  rounded-3xl lg:ml-10 p-5">
                        <figure className="flex justify-center items-center"><img className="w-32 h-32 border border-green-400 rounded-[800px]" src="https://i.ibb.co/Jq9n3yk/360-F-224869519-a-Rae-Lneq-ALf-PNBzg0xx-MZXghtv-BXkf-IA.jpg" alt="" /></figure>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Expedita, dolores aliquam? Dolor, accusantium praesentium dolorum
                            obcaecati sunt autem quasi tenetur.</p>
                        <br />
                        <p className="text-center font-bold text-green-400">Nat broclen</p>
                        <p className=" text-center "> chief accountent</p>
                    </div>
                    <div className=" w-96 rounded-3xl bg-base-200 h-96 p-5">
                        <figure className="flex justify-center items-center"><img className="w-32 h-32 border border-green-400 rounded-[800px]" src="https://i.ibb.co/0Vtw2bZ/istockphoto-968526678-612x612.jpg" alt="" /></figure>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Expedita, dolores aliquam? Dolor, accusantium praesentium dolorum
                            obcaecati sunt autem quasi tenetur.</p>
                        <br />
                        <p className="text-center font-bold text-green-400">Nat broclen</p>
                        <p className=" text-center "> Secretary</p>
                    </div>
                    <div className=" w-96 rounded-3xl bg-base-200 h-96 p-5">
                        <figure className="flex justify-center items-center"><img className="w-32 h-32 border border-green-400 rounded-[800px]" src="https://i.ibb.co/LthqT9M/240-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg" alt="" /></figure>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Expedita, dolores aliquam? Dolor, accusantium praesentium dolorum
                            obcaecati sunt autem quasi tenetur.</p>
                        <br />
                        <p className="text-center font-bold text-green-400">Vam broclen</p>
                        <p className=" text-center "> Sales manager</p>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Testimonial;