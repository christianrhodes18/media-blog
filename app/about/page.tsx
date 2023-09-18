import Image from 'next/image'

export default function About() {
    return (
      <main className="mt-6 min-[700px]:mt-12 mb-12 max-w-[700px] mx-auto">
        <div className="w-[95%] min-[700px]:w-full mx-auto">
          <h2 className="">About the Site</h2>
        </div>
        <Image className="mt-3 lg:mt-16 w-full h-auto" src={"/about/keyboard.jpeg"} alt={"About header image"} width={1224} height={564} />

        {/* info section */}
        <section className="w-[95%] min-[700px]:w-full mx-auto mt-10 lg:mt-32 flex gap-8">
          {/* Left Column */}
          <div className="w-1/5 relative"> {/* border-r-2 border-red-500 w-4/5 h-60 my-auto */}
            {/* right-side border */}
            <div className="h-4/5 border-r-2 border-red-500 absolute right-0 top-[10%] bottom-[10%]"></div>
            {/* rotated text */}
            <div className="absolute transform -rotate-90 bottom-1/2 right-0 pb-2 pr-2">
              <p className="text-red-500 my_overline">What</p>
            </div>
          </div>
          {/* Right Column */}
          <div className="w-4/5">
            <p className="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum consequuntur exercitationem perferendis quaerat quibusdam eveniet, adipisci totam dolor maxime, laudantium voluptate quae excepturi. Sed, voluptatem numquam? Optio recusandae laborum quidem accusamus a voluptatem eaque veniam deserunt qui quis minus autem, asperiores, aperiam pariatur ea nam sit. Voluptates, hic culpa?</p>
          </div>
        </section>

        {/* categories section */}
        <section className="mt-10 lg:mt-32">
          <h2>Categories</h2>
        </section>
      </main>
    )
  }