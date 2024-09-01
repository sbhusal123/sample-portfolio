import { FaPython, FaReact, FaAndroid } from "react-icons/fa";


export function Hero(){
    return (
        <div className="relative">
            <div className="grid md:grid-cols-2 max-sm:grid-rows-2 items-center">
                <div>
                    <img  src="story.svg" className="sm:w-100"></img>
                </div>

                <div className="flex flex-col text-center relative">
                    <div>
                        <h1 className="text-2xl max-sm:text-xl font-bold">Exccellence at You Choice</h1>
                    </div>
                    <div className="">
                        <p className="my-5">
                            At InfoTech, we are dedicated to transforming your IT vision into reality with unmatched precision and innovation. Our team of experts harnesses cutting-edge technology and best practices to deliver tailored solutions that meet your unique needs. From robust software development to seamless IT infrastructure management, we ensure that every project achieves the highest standards of excellence. Partner with us to experience a blend of technical expertise and personalized service that drives success and fosters growth. Your goals are our priority, and excellence is our commitment.
                        </p>
                    </div>
                </div>
        </div>
        </div>
    )
}