const ContentHome = () => {
    return (
        <>
            <div
                className="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded dark:bg-gray-800 dark:text-white">
                <div className="font-sans">
                    {/*<span className="text-base text-purple-500 font-bold">&laquo;</span>*/}
                    {/*<a href="#" className="text-base md:text-sm text-purple-500 font-bold no-underline hover:underline">Back Link</a>*/}
                    <h1 className="font-sans break-normal text-gray-900 pt-6 pb-2 text-xl dark:text-white">Ngaji</h1>
                    <hr className="border-b border-gray-400" />
                </div>
                <p className="py-6">
                    👋 Bismillah, Selamat datang di platform <strong className="text-blue-800 dark:text-white">Ngaji</strong>. Platform ngaji dibuat agar kamu menjadi semangat untuk membaca Al-Quran.
                    Semoga dengan adanya platform ini dapat memberikan manfaat baik di dunia maupun di akhirat. Aamiin.
                </p>


                <hr className="border-gray-400" />
                <p className="py-4">
                    Fitur Platform Ngaji
                </p>
                <ul className="list-disc ml-5 mb-8">
                    <li>Al-Quran Online</li>
                    <li>Audio Ayat</li>
                    <li>Bookmark Ayat</li>
                    <li>...</li>
                </ul>

                {/*<div className="flex items-center">
                    <svg
                        className="h-16 fill-current text-gray-600 hover:shadow hover:bg-purple-100 hover:text-green-500 p-4 mr-2 border rounded"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z"/>
                    </svg>
                    <svg
                        className="h-16 fill-current text-gray-600 hover:shadow hover:bg-purple-100 hover:text-red-500 p-4 mr-2 border rounded"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z"/>
                    </svg>
                    <div className="pl-4">
                        <p className="text-gray-800 font-bold">Did you find this article useful?</p>
                        <p className="text-xs text-gray-600 pt-2">0 out of 0 found this useful</p>
                    </div>
                </div>*/}
            </div>
        </>
    )
}

export default ContentHome