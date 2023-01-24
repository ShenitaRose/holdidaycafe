import Image from "next/image"
import Header from "../components/header"


const files = [
    {
      title: 'IMG_4985.HEIC',
      source:
        '/images/illustrations/interior3.jpg',
    },
    {
        title: 'Ambient Environment',
        source:
          '/images/illustrations/interior1.jpg',
      },
      {
        title: 'Soothing atmosphere',
        source:
          '/images/illustrations/interior.jpg',
      },
      {
        title: 'Lots of Greenery',
        source:
          '/images/illustrations/entry.jpg',
      },
      {
        title: 'Cafe Inside',
        source:
          '/images/illustrations/interior4.jpg',
      },
  ]
  
  export default function Gallery() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Header />

            <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/illustrations/entry.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          height={1000}
          width={1000}
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-5xl font-bold tracking-tight text-white sm:text-4xl">We Care for our Planet</h2>
        <p className="mt-3 text-xl text-white">
          We are committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to
          focus on quality and reduce our impact. We are doing our best to delay the inevitable heat-death of the
          universe.
        </p>
        <a
          href="#"
          className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
        >
          Read our story
        </a>
      </div>
    </div>
      <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 px-16 pt-16">
        {files.map((file) => (
          <li key={file.source} className="relative">
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <Image src={file.source} alt="" height={1130} width={1200} className="pointer-events-none object-cover group-hover:opacity-75" />
              <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View details for {file.title}</span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
            
          </li>
        ))}
      </ul>
      </div>
    )
  }
  