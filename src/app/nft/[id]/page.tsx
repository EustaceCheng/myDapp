import Image from 'next/image';

export default function NFTDropPage({ params }: { params: { id: string } }) {
    return (
        <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
            {/* left */}
            <div className=" bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
                <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen ">
                    <div className=" rounded-xl  bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
                        <Image
                            className="h-44 w-44  rounded-xl object-cover lg:h-96 lg:w-72"
                            src="/assets/profile.jpg"
                            alt=""
                            width={256}
                            height={100}
                            quality={100}
                            priority={true}
                        />
                    </div>
                    <div className="space-y-2 p-5 text-center">
                        <h1 className="text-4xl font-bold text-white">Parker Apps</h1>
                        <h2 className="text-xl text-gray-300">A collection of App</h2>
                    </div>
                </div>
            </div>
            {/* right */}
            <div className="flex flex-1 flex-col p-12  lg:col-span-6">
                <header className="flex items-center justify-between">
                    <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80 ">
                        The{` `}
                        <span className="font-extrabold underline decoration-pink-600/50">
                            Parker
                        </span>
                        {` `}
                        NFT Market Place
                    </h1>
                    <button className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base">
                        Sign in
                    </button>
                </header>
                <hr className=" my-2 border " />
                {/* content  */}
                <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
                    <img
                        src="https://links.papareact.com/bdy"
                        alt=""
                        className="w-80 object-cover pb-10 lg:h-40"
                    />
                    <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
                        The Parker Coding Club | NFT Drop
                    </h1>
                    <p className="pt-2 text-xl text-green-500">0 / 13 NFT's claimed</p>
                </div>
            </div>
        </div>
    );
}
