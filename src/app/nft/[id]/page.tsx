import Image from 'next/image';

export default function NFTDropPage({ params }: { params: { id: string } }) {
    return (
        <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
            {/* left */}
            <div className=" bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
                <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen ">
                    <div className=" rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
                        <Image
                            className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
                            src="/assets/profile.jpg"
                            alt=""
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="space-y-2 p-5 text-center">
                        <h1 className="text-4xl font-bold text-white">Parker Apps</h1>
                        <h2 className="text-xl text-gray-300">A collection of App</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
